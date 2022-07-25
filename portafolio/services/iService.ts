export  interface IService<T> {
    list(): Promise<T>;
    detail(slug:string): Promise<T>;
    create(data:T): Promise<T>;
    update(slug:string, data:T): Promise<T>;
    delete(slug:string): Promise<T>;
}