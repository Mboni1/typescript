type customer = {
    birthday: Date
};
function getCustomer(id:number): customer | null | undefined{
    return id === 0 ? null: {birthday: new Date()}
}
let customer = getCustomer(0);
//optional property access operator
    console.log(customer?.birthday?.getFullYear());
//optional element access operator
//customers?.[0]
//optional call
let log: any = null;
log?.('a');

