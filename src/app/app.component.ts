import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
/*import { CodePush, SyncStatus } from '@ionic-native/code-push/ngx';*/
/*import { OneSignal } from '@ionic-native/onesignal/ngx';*/
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  showLoadingIndicator: boolean = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _router: Router,
    private alertCtrl: AlertController,
    /*private codePush: CodePush,*/
    /*private oneSignal: OneSignal*/

  ) {
    /*this._router.events.subscribe((routerEvent: Event)=>{
			if(routerEvent instanceof NavigationStart){
				this.showLoadingIndicator = true;
			}
			if(routerEvent instanceof NavigationEnd){
				this.showLoadingIndicator = false;
			}
		});*/
    this.initializeApp();
  }
  doRefresh(event){
    setTimeout(()=>{
      console.log('operation ended', event)
      event.target.complete();
    },2000)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString("#33000000");
      }

      /*this.codePush.sync({}, (progress)=>{

    }).subscribe(async (status)=>{
      if(status == SyncStatus.CHECKING_FOR_UPDATE){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: 'Want to Update Your App....',
          buttons: [
            {
              text: 'Cancle',
              role: 'cancel',
            },
            {
              text: 'Update',
          }
            
          ]
        });
       
        await alert.present();
        
      }

      if(status == SyncStatus.DOWNLOADING_PACKAGE){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: 'Downloading Packages for Update....',
          buttons: ['OK']
        });
       
        await alert.present();
        
      }
      
      
      if(status == SyncStatus.UP_TO_DATE){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: 'App Upto Date',
          buttons: ['OK']
        });
        
        await alert.present();
        
        
      }
      if(status == SyncStatus.UPDATE_IGNORED){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: 'App Update Ignore',
          buttons: ['OK']
        });
        
        await alert.present();
        

      }
      if(status == SyncStatus.ERROR){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: 'App Update Error',
          buttons: ['OK']
        });
        
        await alert.present();
        
      }
  
    });*/

    /*this.oneSignal.startInit('a0ab64fa-c1d8-4187-b0fa-9d8317251d5b', '94474898842');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
      
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        
      });

      this.oneSignal.endInit();*/


      });
  }

  ngOnInit() {
   
  }
}
