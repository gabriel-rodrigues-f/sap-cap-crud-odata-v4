namespace com.company;

entity Products {
    key ID          : UUID;
        Code        : String(10) not null;
        Name        : String(20) not null;
        Description : String(40) not null;
        Price       : Decimal(10, 2) not null;
        Supplier    : String(20) not null;
}
