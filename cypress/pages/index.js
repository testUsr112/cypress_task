import { LoginPage } from './loginPage';
import { HomePage } from './homePage';
import { ProductPage } from './productPage';
import { CartPage } from './cartPage';

export function pages(name) {
    const items = {
        login: new LoginPage(),
        home: new HomePage(),
        product: new ProductPage(),
        cart: new CartPage()
    }
    return items[name.toLowerCase()];
}