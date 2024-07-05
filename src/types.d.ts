export type Product = {
    id: string;
    name: string;
    price: string;
    image:any;
    description:string;
    type:string;
  }

  declare const require: {
    context(
        directory: string,
        useSubdirectories?: boolean,
        regExp?: RegExp
    ): {
        keys(): string[];
        <T>(id: string): T;
        <T>(id: string): T;
        resolve(id: string): string;
    };
};