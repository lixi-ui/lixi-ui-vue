// 不要在业务逻辑上,使用 typescript
// var aa: number[] = [12,'aaa'] TS2322: Type 'string' is not assignable to type 'number'

var aa: number[] = [12]
var ab: Array<number|string> = [123,'ss']

interface ac {
  ad: string;
  aj?: number; // TS2345: Argument of type '{ ad: string; }' is not assignable to parameter of type 'ac'.Property 'aj' is missing in type '{ ad: string; }' but required in type 'ac'
  [propName: string]: any;
}

var af = function (ae: ac) {
  ae.aj = 123
  // console.log({ad:'123',ak: 1,ag: 1, aj: 123} as ac)
}

// af({ad:123}) // Type 'number' is not assignable to type 'string'.

af({ad:'123',ak: 1,ag: 1})

class ah {
  private ai:any = 123 // TS2341: Property 'ai' is private and only accessible within class 'ah'. 
  al = 1234
  get am () {
    return this.ai + 'get'
  }
  set am (an: string) {
    this.ai = an
  }
}

// console.log(new ah().al)

type Ao = string;
type Ap = () => string;
type Aq = Ao | Ap;

function getName(as: Aq):Ao {
  if (typeof as === 'string') {
    return as
  } else {
    return as()
  }
}

// getName(function () { return 123 }) // Argument of type '() => number' is not assignable to parameter of type 'Aq'. Type '() => number' is not assignable to type 'Ap'. Type 'number' is not assignable to type 'string'

getName(function () { return '123' })

function fn(x: HTMLDivElement): string;
// declare function fn(x: HTMLElement): number;
function fn(x: any): any{
  return x.toString()
}

var myElem: HTMLDivElement;
var div = document.createElement('div');
myElem = div;

var x = fn(myElem);

function mapObject<K extends string | number, T , U>(
  obj: Record<K, T>,
  f: (x: T) => U
): Record<K, U> {
  let res = {} as Record<K, U>;
  for (const key in obj){
    res[key] = f(obj[key]);
  }
  return res;
}

const names = { 0: 'hello', 1: 'world', 2: 'bye'};
const lengths = mapObject(names, s => s.length);

export default aa;