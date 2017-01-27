import { test } from 'qunit';
import moduleForAcceptance from 'acceptance-testing/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | products');

test('visiting /products', function(assert) {
  visit('/products');

  andThen(function() {
    assert.equal(currentURL(), '/products');
  });
});

test('Visiting /products and check Add To Cart button', function(assert) {
  visit('/products');

  click('#product-0 .btn');
  click('#product-1 .btn');
  click('#product-2 .btn');

  andThen(function() {
    assert.equal(find('#cart .cart-item').length , 3);
  });

});
