# dec-injection-dependency

A very simple way to inject dependencies using decorators. It's means that it allow us to implements a easy dependency inversion, using SOLID and Clean Architecture principles.

## Installation
1. Install package:
    ```
    npm install dec-injection-dependency
    ```

## Using
You need to decorate your classes to allow later injection.
```ts
import { Injectable } from 'dec-injection-dependency';

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
import { Inject } from 'dec-injection-dependency';

class TestingInjection {

  @Inject('MyInjectablePrint')
  private myInjectablePrintObject: IMyPrint;

  public doSomething() {
    this.myInjectablePrintObject.printMessage('Hello World');
  }
}
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/GuilhermeSevero/dec-injection-dependency.


## License

The npm package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
