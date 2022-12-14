export interface IDatabase {
    list(type: any): any[],
    create(type: any, data: any): any,
    listID(type: any, dataId: any): any,
    update(type: any, data: any): any,
    delete(type: any, dataId: any): any
}