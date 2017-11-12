# React Filtering and Sorting Lab

In this lab you'll take some of the filtering and sorting concepts we've covered and put them into practice in a real-world app.

## Trainr

Trainr is a fictitious online shoe store which predominantly sells trainers. It is your task to implement sorting and filtering on their product home page.

The starter code has some dummy data and the `SearchBar` component already build out for you. You need to hook it up to the `ProductGrid` component where all the logic will reside.

## Setup

- Install the dependencies with `yarn install`
- Start webpack with `yarn start`
- Navigate to 'http://localhost:8000'

## Check out the codebase

Take a look in the `SearchBar` component in `src/components/products/SearchBar`. You should see the sort dropdown and the search input field:

#### Sort dropdown

```js
<FormControl componentClass="select">
  <option value="price|desc">Price (High - Low)</option>
  <option value="price|asc">Price (Low - High)</option>
  <option value="brand|asc">Brand (A - Z)</option>
  <option value="brand|desc">Brand (Z - A)</option>
  <option value="name|asc">Name (A - Z)</option>
  <option value="name|desc">Name (Z - A)</option>
</FormControl>
```

#### Search input field

```js
<FormGroup>
  <FormControl type="text" placeholder="Search"/>
</FormGroup>
```

The `SearchBar` component is a dumb, functional component and will receive all the data it needs from its parent `ProductGrid`, which is located in the same folder.

## An initial sort

Currently when the page loads the product appear in no particular order. However the sort dropdown indicated Price (High - Low). React will re-render the product grid whenever `state` changes, so we can actually do our sorting _inside_ the `render` function.

We'll use Lodash's helpful `orderBy()` function for this, since we want to order descending.

Import Lodash at the top of the `ProductGrid` script:

```js
import _ from 'lodash';
```

Then apply the sort in the `render()` function:

```js
render() {
  // const { products } = this.state;
  const products = _.orderBy(this.state.products, ['price'], ['desc']);
  return (
    ...
  );
}
```

The products should now order themselves when the page loads.

## Dynamic sorting

That's great but we want to be able to change the order when the dropdown is changed. To do that we need to add an event listener to the `onChange` event of the sort dropdown.

Because the event listener will change the state of `ProductGrid`, we need to create it there:

```js
handleSort = (e) => {
  console.log(e.target.value);
}
```

Now we can pass it down to the `SearchBar` component as a prop:

```js
<SearchBar handleSort={this.handleSort} />
```

Now we can hook it up inside the `SearchBar` component:

```js
// pull handleSort out of props
const SearchBar = ({ handleSort }) => {
  return(
    <div>
      <Col md={6}>
        <FormGroup>
          // hook up handleSort to the onChange event of the drop down
          <FormControl componentClass="select" onChange={handleSort}>
            ...
          </FormControl>
        </FormGroup>
      </Col>
      ...
    </div>
  );
};
```

When you change the dropdown you should now see the new values appear in the console.

#### A special naming convention

The naming convention of the `value` properties of the `options` here is very important. Each `option` needs to indicate the property we want to sort by, _and_ the direction to sort in. The `|` symbol makes it easy for us to extract the two pieces of information from one string, using [`split()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/split).

Split will literally split a string by a given character and return an array containing the pieces.

Update the `handleSort` method to use it:

```js
handleSort = (e) => {
  console.log(e.target.value.split('|'));
}
```

As you change the dropdown, you should now see arrays appearing in the console.

We're going to use ES6's _descricturing_ syntax to grab each part of the array into its own variable:

```js
handleSort = (e) => {
  const [sortBy, sortDirection] = e.target.value.split('|');
  console.log(sortBy, sortDirection);
}
```

You should now see two separate strings in the console when you change the dropdown.

#### Sorting by state

We're now going to update the component's `state` every time the dropdown changes, which in turn will re-render the product grid, and call the `_.orderBy()` method at the top of the `render()` function.

Firstly we need to add `sortBy` and `sortDirection` to `state`, and update the `_.orderBy()` method to use them:

```js
state = {
  products: productData,
  sortBy: 'price',
  sortDirection: 'desc'
};

...

render() {
  const { sortBy, sortDirection } = this.state;
  const products = _.orderBy(this.state.products, [sortBy], [sortDirection]);
  return (
    ...
  );
}
```

OK, we're all set. All we need to do now is use `setState` in our `handleSort` method:

```js
handleSort = (e) => {
  const [sortBy, sortDirection] = e.target.value.split('|');
  this.setState({ sortBy, sortDirection });
}
```

The order of the products should now update as the dropdown changes.

## Filtering

Filtering will be very similar to sorting. You will need to create an event listener and hook it up to the search field as per the select dropdown.

Name your event listener `handleSearch` and log `e.target.value` inside it. You should see the characters you type in the search field appear in the console before you move on.

We'll use the same search string to filter the `brand` _and_ the `name` of our trainers. Create a variable `query` on `state` and set it to be an empty string. Use `setState` in the `handleSearch` to update the value of `query` every time the user types in the search field.

You can check you are on the right path by adding a `console.log` in the `render()` method of `ProductGrid`:

```js
render() {
  console.log('LOGGING Q IN RENDER METHOD ======> ', this.state.query);
  const { sortBy, sortDirection } = this.state;
  const products = _.orderBy(this.state.products, [sortBy], [sortDirection]);
  return (
    ...
  );
}
```

We'll use the value of `this.state.query` to form our regular expression. We can use the literal syntax `/this.state.query/` because that would actually try to find the characters 'this.state.syntax' when we use it. Instead we can use the constructor syntax: `new RegExp(this.state.query, 'i')`. (Remember: passing the `i` flag will make the search case-insensitive).

You can now filter the products inside the `render()` method, using lodash's `filter()` method.

```js
render() {
  const { sortBy, sortDirection, query } = this.state;
  const regex = new RegExp(query, 'i');

  const orderedProducts = _.orderBy(this.state.products, [sortBy], [sortDirection]);
  const products = _.filter(orderedProducts, (product) => regex.test(product.name));
  return (
    ...
  );
}
```

Once you have that working for the name, update the code to also filter on the `brand` property as well.

When everything is working, move all the sorting and filtering logic from `render()` to its own method.

## Conclusion

React is very good at quickly rendering and updating the page, but leaves everything else to the developer to take care of. This may seem daunting at first but this means that learning things like sorting and filtering collections of data is no longer specific to the chosen JavaScript library or framework.

Using libraries like Lodash help to remove some of the challenges of working with JavaScript, which frees the developer up for solving more complex and interesting problems.

The better your understanding of Array methods like [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), and [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach), the better you are equipped to solve problems with any framework or language!

## Further reading

- [Array - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Best JavaScript Frameworks, Libraries and Tools to use in 2017](https://www.sitepoint.com/top-javascript-frameworks-libraries-tools-use/)
