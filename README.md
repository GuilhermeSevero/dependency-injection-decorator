# dependency-injection-decorator

A very simple way to inject dependencies using decorators. It's means that it allow us to implements a easy dependency inversion, using SOLID and Clean Architecture principles.

## Installation
Installing package:
```
npm install -S dependency-injection-decorator
```

## Using
You need to decorate your classes to allow injection.
```ts
// my-print.ts
import { Injectable } from 'dependency-injection-decorator';

export interface IMyPrint {
  printMessage: (message: string) => void;
}

@Injectable()
class MyInjectablePrint implements IMyPrint {

  public printMessage(message: string): void {
    console.log(message);
  }
}
```

Afterwards, all decorated classes can be injected as an attribute in another class
```ts
// testing-injection.ts
import { Inject } from 'dependency-injection-decorator';

import { IMyPrint } from './my-print';

export class TestingInjection {

  @Inject('MyInjectablePrint')
  private myInjectablePrintObject: IMyPrint;

  public doSomething() {
    this.myInjectablePrintObject.printMessage('Hello World');
  }
}
```

## Testing
Using the previous decorated classes, you can overload the injected object

```ts
// testing-injection.spec.ts
import { testUtils } from 'dependency-injection-decorator';

import { TestingInjection } from './testing-injection';

describe('TestingInjection', () => {
  let testingInjection: TestingInjection;

  let printMessageMock: jest.Mock;

  beforeAll(() => {
    testingInjection = new TestingInjection();

    printMessageMock = jest.fn();
    testUtils.overloadInjectable('MyInjectablePrint', { printMessage: printMessageMock })
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should call mocked function', () => {
    testingInjection.doSomething();

    expect(printMessageMock).toBeCalledTimes(1);
    expect(printMessageMock).toBeCalledWith('Hello World')
  });
});

```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/GuilhermeSevero/dependency-injection-decorator.


## License

The npm package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
