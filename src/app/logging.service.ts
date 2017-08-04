//dont need to import or add any decorator for service
export class LoggingService{
    logStatusChange(status: string){
        console.log('A server status changed, new status: ' + status);
        
    }
}