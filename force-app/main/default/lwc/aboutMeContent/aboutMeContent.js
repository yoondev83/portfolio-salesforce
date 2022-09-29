/**
 * Created by yoonsukchang on 9/17/22.
 */

import {LightningElement} from 'lwc';
import {aboutMeContent} from "c/data";
import LightningAlert from 'lightning/alert';

export default class AboutMeContent extends LightningElement {
    aboutMeData = aboutMeContent;
    handleClick(){
        let email = document.createElement('textarea');
        email.value = 'yoondev83@gmail.com';
        document.body.appendChild(email);
        email.focus();
        email.select();
        document.execCommand('copy');
        email.remove();

        this.handleAlertClick();
    }
    async handleAlertClick() {
        await LightningAlert.open({
            message: 'Email Copied!',
            theme: 'green', // a red theme intended for error states
            label: 'Copied', // this is the header text
        });
        //Alert has been closed
    }
}