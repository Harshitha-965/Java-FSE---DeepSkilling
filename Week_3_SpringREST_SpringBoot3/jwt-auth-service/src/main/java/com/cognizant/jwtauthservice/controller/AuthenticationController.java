package com.cognizant.jwtauthservice.controller;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@RestController
public class AuthenticationController {

    private static final String SECRET =
            "mysecretkeymysecretkeymysecretkey12";

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authorizationHeader) {

        // Remove "Basic "
        String base64Credentials = authorizationHeader.substring(6);

        // Decode Base64 credentials
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);

        String credentials =
                new String(decodedBytes, StandardCharsets.UTF_8);

        // Split username and password
        String[] values = credentials.split(":");

        String username = values[0];

        // Generate signing key
        Key key = Keys.hmacShaKeyFor(
                SECRET.getBytes(StandardCharsets.UTF_8));

        // Generate JWT
        String token = Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(key)
                .compact();

        Map<String, String> response = new HashMap<>();

        response.put("token", token);

        return response;
    }

}