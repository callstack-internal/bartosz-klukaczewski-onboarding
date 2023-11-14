package com.weatherapp;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;


import android.Manifest;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.content.Context;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;

public class LocationModule extends ReactContextBaseJavaModule {
    final ReactApplicationContext context;
    final LocationManager locationManager;

    LocationModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
        this.locationManager = (LocationManager) context.getSystemService(Context.LOCATION_SERVICE);
    }

    @Override
    public @NonNull String getName() {
        return "LocationModule";
    }

    private WritableMap locationToMap(Location location) {
        WritableMap map = Arguments.createMap();
        map.putDouble("latitude", location.getLatitude());
        map.putDouble("longitude", location.getLongitude());
        return map;
    }

    private WritableMap errorToMap(String error) {
        WritableMap map = Arguments.createMap();
        map.putString("code", "Error");
        map.putString("message", error);
        return map;
    }
    @ReactMethod
    public void getCurrentLocation(final Callback success,
                                   final Callback error) {
        if (ActivityCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            error.invoke(errorToMap("Location permission not granted"));
            return;
        }

        LocationListener locationListener = new LocationListener() {
            @Override
            public void onLocationChanged(@NonNull Location location) {
                success.invoke(locationToMap(location));
                locationManager.removeUpdates(this);
            }

            @Override
            public void onProviderDisabled(@NonNull String provider) {
                error.invoke(errorToMap("Location provider disabled"));
            }
        };

        locationManager.requestSingleUpdate(LocationManager.GPS_PROVIDER, locationListener, null);
    }
}