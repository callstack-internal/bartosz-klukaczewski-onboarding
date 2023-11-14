#import "RCTLocationModule.h"
#import <CoreLocation/CoreLocation.h>
#import <React/RCTUtils.h>

@interface RCTLocationModule() <CLLocationManagerDelegate>

@property (strong, nonatomic) CLLocationManager *locationManager;
@property (strong, nonatomic) RCTResponseSenderBlock successCallback;
@property (strong, nonatomic) RCTResponseSenderBlock errorCallback;

@end

@implementation RCTLocationModule

RCT_EXPORT_MODULE(LocationModule);

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (instancetype)init {
  self = [super init];
  if (self) {
    self.locationManager = [[CLLocationManager alloc] init];
    self.locationManager.delegate = self;
    self.locationManager.desiredAccuracy = kCLLocationAccuracyThreeKilometers;
  }
  return self;
}


RCT_EXPORT_METHOD(getCurrentLocation:(RCTResponseSenderBlock)success error:(RCTResponseSenderBlock)error) {
    if ([CLLocationManager locationServicesEnabled]) {
        self.successCallback = success;
        self.errorCallback = error;
        [self.locationManager startUpdatingLocation];
    } else {
        NSError *locationError = [NSError errorWithDomain:@"LocationServicesUnavailable" code:1 userInfo:nil];
        error(@[@"LOCATION_SERVICES_UNAVAILABLE", @"Location services are not available", locationError]);
    }
}

- (void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray<CLLocation *> *)locations {
    CLLocation *location = [locations lastObject];
    if (self.successCallback) {
      NSDictionary* locationResult = @{
                  @"latitude": @(location.coordinate.latitude),
                  @"longitude": @(location.coordinate.longitude),
              };
      self.successCallback(@[locationResult]);
      self.successCallback = nil;
    }
    [self.locationManager stopUpdatingLocation];
}

- (void)locationManager:(CLLocationManager *)manager didFailWithError:(NSError *)locationError {
    if (self.errorCallback) {
      NSDictionary* locationErrorDict = @{
                  @"code": @(locationError.code),
                  @"message": locationError.localizedDescription,
              };
      self.errorCallback(@[locationErrorDict]);
      self.errorCallback = nil;
    }
}

@end
