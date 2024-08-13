using com.company as base from '../db/schema';

service Products {
    entity Products as projection on base.Products;
}
