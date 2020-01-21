function myFunction() { 
  document.getElementById("demo").innerHTML = "Hello JavaScript!"
}
<script>
!function(t,e,n,s,a,c,i,o,p){t.AppsFlyerSdkObject=a,t.AF=t.AF||function(){(t.AF.q=t.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))},t.AF.id=t.AF.id||i,t.AF.plugins={},o=e.createElement(n),p=e.getElementsByTagName(n)[0],o.async=1,o.src="https://websdk.appsflyer.com?"+(c.length>0?"st="+c.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),p.parentNode.insertBefore(o,p)}(window,document,"script",0,"AF","banners",{banners: {key: "5634632d-8340-4753-8bf4-381a8cb1f7a7"}})
AF('banners', 'showBanner')
</script>

// var banner = new AFBanner();
// var settings = {
//     // banner settings
//     title: "AppsFlyer",
//     subtitle: "Track campaigns on the go",
//     app_icon: "img/app_icon.png",
//     call_to_action: "Install",
//     show_only_mobile: true,
    
//     // attribution settings
//     media_source: "banner_pid",
//     campaign: "banner_c",
//     adset: "banner_adset",
//     adset_id: "banner_adset_id",
//     ad: "banner_ad",
//     ad_id: "banner_ad_id",
//     site_id: "banner_site_id",
//     sub1: "banner_sub1",
    
//     // routing settings
//     onelink_id: "R7ji",
//     subdomain: "appsflyer",
//     mobile_deeplink: "appsflyer://"
// };

// banner.init("my-banner", settings);
