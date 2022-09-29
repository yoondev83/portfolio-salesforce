/**
 * Created by yoonsukchang on 9/16/22.
 */

import {LightningElement} from 'lwc';
import {mainMessageData} from "c/data";
import linkedin from "@salesforce/resourceUrl/icon_linkein";
import trailhead from "@salesforce/resourceUrl/iconTrailhead";
export default class MainMessageTyping extends LightningElement {
    linkedinIcon = linkedin;
    trailheadIcon = trailhead;
    renderedCallback() {
        const text = this.template.querySelector('.movingMsg');

        let index = 0; // 문자열 인덱스
        let msgArrIdx = 0;
        const typing = () => {
            text.textContent += mainMessageData[msgArrIdx].content[index++];
            if(index > mainMessageData[msgArrIdx].content.length){
                text.textContent = "";
                index = 0;
                if(msgArrIdx < mainMessageData.length-1)
                    msgArrIdx++;
                else
                    msgArrIdx = 0;
            }
        }
        setInterval(typing, 100);

    }
}