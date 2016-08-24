export class FirebaseConfig {
   public static get CONFIG_DATA(): any {
        return ({
            apiKey: "<your-key>",
            authDomain: "<your-project-authdomain>",
            databaseURL: "<your-database-URL>",
            storageBucket: "<your-storage-bucket>"
        });
    }
}