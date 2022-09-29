# How do I install?
git clone and push it to your org. You will see my components on the community page builder.
And add the CSS code below into the community page builder theme CSS (Theme -> the down arrow -> edit css).

## I just want to get LWC components.
Please check the folder force-app\main\default\lwc
You can simply download files and then put them into your project directory.

## Add this CSS code into the community page builder theme CSS.
```
*,
*::after,
*::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
html {
    font-family: 'Montserrat-Regular', 'Times New Roman', sans-serif;
	font-size: 62.5%;
	-webkit-font-smoothing: antialiased;
	margin: 0;
	padding: 0;
}
body {
    box-sizing: border-box;
}
.cProfileMenu{
  display:none;  
}

.cBrandingLogo{
    margin-right: 3rem;
     zoom: 200%;
}
.siteforceCptBody .cHeader .cAltToggleNav {
         zoom: 430%;
    }
.forceCommunityGlobalNavigation ul{
    justify-content: space-around;
}
.forceCommunityGlobalNavigation ul li a span{
    font-size: 1.3rem;
}

body .cCenterPanel .siteforceContentArea .slds-grid .comm-layout-column{
    background-color: rgb(233, 213, 161);
}

@media only screen and (max-width: 47.9375em){
    .siteforceCptBody .cHeader .cAltToggleNav {
         zoom: 230%;
    	padding-bottom: 3px;
    }
    .siteforceCptBody .cHeader .cLogo a {
    	padding-left: 100px;	
        margin-right: 0;
	}
}
```

## Images and fonts do not load.
Images and fonts that I used for this portfolio are uploaded in Static Resources on Setup.
I am not sure if files are automatically uploaded when you pull this whole project and push into your org.
Just make sure to upload your custom files in Static Resources.

When you add your own font, make sure to use this code and change a bit to load the font.
``` 
@font-face {
    font-family: 'Montserrat-Regular';
    src: url('/sfsites/c/resource/Montserrat/Montserrat-Regular.ttf');
}
```
When you add or change images, you can load the images just like the font url above or use LWC JavaScript.
For example,
```
import profile from '@salesforce/resourceUrl/Yoonsuk_Profile';
export default class AboutMePhoto extends LightningElement {
    profileImg = profile;
}

-----------------------------
 <img src={profileImg} alt="profile image">
```
