public class BuilderTest {
    public static void main(String args[]){
        Computer computer1 = new Computer.Builder()
                .setCpu("Intel i7")
                .setRam("16 GB")
                .setStorage("512 GB SSD")
                .build();

        Computer computer2 = new Computer.Builder()
                .setCpu("AMD Ryzen 5")
                .setRam("8 GB")
                .setStorage("1 TB HDD")
                .build();
        System.out.println(computer1);
        System.out.println(computer2);
    }
}
