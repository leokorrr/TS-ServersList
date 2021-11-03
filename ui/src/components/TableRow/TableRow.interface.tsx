export default interface TableRowInterface {
    name: string;
    status: 'ONLINE' | 'OFFLINE' | 'REBOOTING';
    _id: number;
}