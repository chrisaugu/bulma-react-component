import { sayHello, sayGoodbye } from "../hello-world";

test('Greeter', () => {
  expect(sayHello()).toBe('Hi');
  expect(sayGoodbye()).toBe('goodbye');
});
