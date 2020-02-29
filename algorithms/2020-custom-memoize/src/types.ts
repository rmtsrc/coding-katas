type testFunc = (input: string) => any;

export type MemoizeFunc = (inputFunc: testFunc) => testFunc;
