# How do I install?
git clone and push it to your org. You will see my components on the community page builder.

## I just want to get LWC components.
Please check the folder force-app\main\default\lwc
You can simply download files and then put them into your project directory.

## Images and fonts do not load.
Images and fonts that I used for this portfolio are uploaded in Static Resources on Setup.
When you add your own fonts, make sure to use this code:
''' @font-face {
    font-family: 'Montserrat-Regular';
    src: url('/sfsites/c/resource/Montserrat/Montserrat-Regular.ttf');
}
'''
When you add or change images, you can load the images just like the font url above or use LWC JavaScript.
