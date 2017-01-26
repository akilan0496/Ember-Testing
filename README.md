# Testing in Ember with Ember CLI

Ember has an incredible test suite built on top of QUnit for unit, integration, and acceptance testing, and I think you’re going to love it.

Ember has three types of testing: unit, integration, and acceptance.

#### What are Unit Tests?

Most developers typically agree on the definition of a unit test. A unit test verifies that a specific unit, typically a function or a method on an object, behaves as expected in an isolated environment. Unit tests are very low level. If a unit test breaks, you know exactly which unit went wrong.

#### What are Acceptance Tests?

Ember, is very fast when it comes to acceptance testing. Instead of using a tool that automates opening and closing a browser, it uses its dependency injection system called the container to reset the state between acceptance tests. When your Ember application starts up, all of your Ember objects like routes, controllers, and services get placed into the container, and this container gets recreated between tests which is much faster than restarting a browser. Because Ember’s acceptance tests run very quickly and are easy to write as you’ll see, you are likely to have higher acceptance test coverage.