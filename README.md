# Oikik

![Ghost version](https://img.shields.io/badge/Ghost-1.1.1-brightgreen.svg?style=flat-square)

Oikik is a Clean & Modern looking theme for Ghost made for professionals. It's particularly developed for professionals who wants not only a blog with ghost's amazing features but also a portfolio to display works. And this theme Oikik, combines them both. 

### Demo

I developed this theme to use in my own website. So, a Demo or Production site whatever you call it, That can be found in my  [Personal Site](https://www.iayon.com/)

## How to use

#### Installation
Installation process is pretty straight forward. Download this theme as Zip and from your Ghost Admin's 'Design' tab, Upload this zip & Activate the theme. 

#### Setup
Now It's time to set things up to get everything up & running. 

##### General Tab
Title & Description is your Sites Name & Description which is shown at the homepage. Add a publication icon of size 60x60 , It's the favicon of your website. Now, add a Nice photo of yours with size at least 600x72 px , It's important because without this photo The Header at Homepage doesn't take full height of the screen. 

Add a Nice publication Cover to be used at Header of your Homepage. Ideal size of this image is 1280x720, I used a white image of this size at my personal site. 

##### Code Injection Tab
Now let's enable the necessary scripts for different features in the website. Go to Code Injection Tab & Add the Following Codes at Blog Header to be used at {{ghost_head}}

```
<script>
var ga_id = 'UA-XXXXXXX'; // Your Google Analytics Tracking ID 
var disqus_shortname = 'XXXXX'; // Your Disqus short name for comment feature at your posts
var addthis_pubid = 'ra-XXXXXXXXXXX'; // Your AddThis PubId for sharing & Subscription features
var social_link = {
    'facebook': 'http://facebook.com/[your FB username]',
    'twitter': 'http://twitter.com/[Your TW username]',
    'linkedin': 'https://www.linkedin.com/in/[Your LinkedIn]',
    'stack-overflow':'https://stackoverflow.com/users/XXXXX/[Your StackOverflow username]',
    'github': 'https://github.com/[Your Github Username]'
}
</script>
```

Important : In the social links above, the keys used there are actually corresponds to Font-Awesome Icons. These are displayed at the HomePage. So, if you want to add more social links, you are free to add another entry there. For example, For adding dribble, First go to Font-Awesome site & search it's icon. It's name is 'fa-dribbble'. So, the entry will be  <pre>'dribbble' : 'Your Dribble URL'</pre>

#### Adding Portfolio
Adding the portfolio feature is not supported by Ghost. So, It's a bit tricky & You'll require to touch the code a bit. No worries, It will require just some minimal edits. 

Here are the steps: 

+ Go to 'Designs' Tab and Add a Navigation Item there. If you follow my setup, then just make it like the image below. 
<img width="965" alt="Adding Navigation" src="https://user-images.githubusercontent.com/2864267/31852995-3ed8913c-b6a3-11e7-9e83-7b05fa084695.png">

Now if you want to use different texts, Then, For the Menu Item i,e "Projects" there's no problem, You can use whatever you want there Like "Portfolio", "Works" etc. But You have to be cautious about the URL. I used "works" here which corresponds to a page template called page-works.hbs . So, if you set URL to /portfolio , then you have to change that file name to page-portfolio.hbs . 

Now Let's create a New Story from the Ghost Admin & Give it a Title "Works" OR "Projects" OR "Portfolio" whatever you used in earlier step. Then make it a Static Page & Publish it. 

Now if you save your changes & Click your Portfolio Menu Item, You'll see this page with a Black Button-Group for filtering purposes. 

Ok, Now you are set to add new portfolio items. To add a Portfolio Item, we'll need to do the following:

+ Create a New Story. 
+ Give it Title -> Your Portfolio Item Name & Contents whatever you wanna write there like a regular blog post. 
+ Click of Gear Icon (Settings) and Click "Upload Post Image". This image will work as cover image of your portfolio item in the Grid. 
+ Tag : ***Most Important*** 
   - Use the tag 'work' as mandatory. Otherwise it won't be visible.
   - Use any other relevant tag, like 'android', 'ios' , 'ux-design' etc. 
+ Make this a static page & Publish it. 

Now, We should be able to see our working portfolio item in the Page. 

Now, Obviously Your Tags may not be same as mine. I work in Mobile Development Domain, so my tags are 'ios','android','web'. Your tags will be different. So, To Enable using & filtering your own tags in the Works Page, you'll need to edit the page-works.hbs file. 

If you open this file, You'll see something like this there in a code block

```
<button type="button" class="btn btn-primary active" data-filter="*">All</button>
<button type="button" class="btn btn-primary" data-filter=".ios">iOS</button>
<button type="button" class="btn btn-primary" data-filter=".android">Android</button>
<button type="button" class="btn btn-primary" data-filter=".web">Web</button>
```

Add/Remove similar entries matching your tags. For example, If you are an UX Designer, then You may wanna use tags 'work' & 'ux-design' for a Portfolio Item. To see that in action, You'll need to add the following line below those codes above.

```
<button type="button" class="btn btn-primary" data-filter=".ux-design">UX Design</button>
```

### Conclusion
So, We are all set using Oikik theme. If you like this theme, please Star it. And if you have any questions, please contact me through my website. Enjoy!


## Copyright & License
Copyright (c) 2017 [Ashiq Uz Zoha](https://www.iayon.com) 
Released under the ![MIT License](https://opensource.org/licenses/MIT).  

