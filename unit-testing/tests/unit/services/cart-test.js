import { moduleFor, test } from 'ember-qunit';

moduleFor('service:cart', 'Unit | Service | cart', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
  beforeEach() {
    window.localStorage.removeItem('cart-test');
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('Test add() function Add items to the localStorage', function(assert) {
  let cartService = this.subject();
  let cartItem1 = { id: 1, product: "moview 1"};
  let cartItem2 = { id: 2, product: "moview 2"};
  cartService.add(cartItem1);
  cartService.add(cartItem2);

  assert.equal(window.localStorage.getItem('cart-test'), JSON.stringify({1 : cartItem1, 2: cartItem2}));
});

test('Test add() function Check duplicate entries', function(assert) {
  let cartService = this.subject();
  let cartItem1 = { id: 1, product: "moview 1"};
  cartService.add(cartItem1);
  cartService.add(cartItem1);

  let items = JSON.parse(window.localStorage.getItem('cart-test'));

  assert.equal(items['1'].quantity, 2);
});
