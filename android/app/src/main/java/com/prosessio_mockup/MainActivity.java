package com.prosessio_mockup;
import android.content.Intent; // <--- import
import android.content.res.Configuration; // <--- import
import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "proSessio_mockup";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(null);
    }
    @Override
      public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }
}