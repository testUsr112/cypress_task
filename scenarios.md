# Feature: Adding to Cart

## Scenario: Add product to the cart
Given the user is on the 'Pliers' product page  
When the user selects product quantity 2  
And the user clicks 'Add to cart' button  
Then the cart icon displays number 2  

## Scenario: Checking the Cart
Given product 'Pliers' is added to the cart  
And the product quantity is 2  
When the user clicks on the cart icon  
Then the cart page is opened  
And the product name is 'Pliers'  
And the product quantity is 2  
And Price is 12.01  
And Total is 24.02  

---

# Feature: Favourites

## Scenario: Add product to Favourites
Given the user is on the product page  
When the user clicks the 'Add to Favourites' button  
Then a toast is displayed  
And the toast message is 'Product added to your favorites list'  

## Scenario: Favorites list
Given a product is added to 'Favorites'  
When the user clicks account name in the menu  
And the user selects 'My Favorites'  
Then Favorites page is opened  
And the added product is in the Favorites list  
And the product name is displayed  
And the product image is displayed  
And the product description is displayed  

---

# Feature: Search

## Scenario: Search by full or partial name
Given the user is on the Home page  
When the user enters 'Claw' into the search field  
And the user clicks on the 'Search' button  
Then only products whose names contain 'Claw' are displayed