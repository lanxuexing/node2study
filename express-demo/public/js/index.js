!function(s){var n={};function t(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return s[e].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=s,t.c=n,t.p="",t(0)}({0:function(e,i,s){e.exports=s(26)},3:function(e,i){function s(){}$.extend(s.prototype,{init:function(){this.fixed(),this.footerLoad(),this.handleClickSucc(),this.login()},footerLoad:function(){$("#js-footer-wrap").on("mouseenter",".friendLink a",function(){$(this).next().css({display:"block"}),$(this).find("span").addClass("actived")}).on("mouseout",".friendLink a",function(){$(this).next().css({display:"none"}),$(this).find("span").removeClass("actived")})},login:function(){0<=navigator.userAgent.indexOf("Mobile")&&(window.location.href="https://m.zto.com/"),zto.auth.getToken()&&HrPost("auth_account_getUserLoginProvider",null,function(e){e.status&&($(".login,.registere").hide(),$(".header-right").append('<div class="user">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="../imgs/login.png" alt="用户"><a href="'+zto.config.centerceUrl+'" data-phone="'+e.result.mobile+'">'+e.result.mobile+"</a>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>"),$(".user").show())})},fixed:function(){if(0<$(".js-nav-fixed").size()){var n=$(".js-nav-fixed"),t=$(".content-main").offset().top;$(document).on("scroll",function(){var e=$(document).scrollTop();if(t<e){n.css("top",e-t+"px");var i=n.offset().top-t,s=$(".content-main").height()-n.height();s<=i?n.css("top",s+"px"):n.css("top",e-t+"px")}else n.css({position:"absolute",top:"0px"})})}},handleClickSucc:function(){$(".nav-item").bind("click",$.proxy(this.handleCliclNav,this)),$(document).on("click",".js-back-top",$.proxy(this.handleClickBackTop,this)),$(".js-job").bind("click",$.proxy(this.handleClickJob,this)),$(".js-finance").bind("click",$.proxy(this.handleClickFinance,this)),$(".js-goHr").bind("click",$.proxy(this.handleClickJob,this)),$(".js-investor-relations").bind("click",$.proxy(this.handleClickInvestorRelations,this)),$(".js-join").bind("click",$.proxy(this.handleClickCooperation,this)),$(".js-about").bind("click",$.proxy(this.handleClickAbout,this)),$(".js-home-page").bind("click",$.proxy(this.handleClickHomePage,this)),$(".js-express-check").bind("click",$.proxy(this.handleClickExpressCheck,this)),$(".js-express-website").bind("click",$.proxy(this.handleClickExpressWebsite,this)),$(".js-express-price").bind("click",$.proxy(this.handleClickExpressPrice,this)),$(".js-express-prohibited").bind("click",$.proxy(this.handleClickExpressProhibited,this)),$(".js-express-questions").bind("click",$.proxy(this.handleClickExpressQuestions,this)),$(".js-express-suggest").bind("click",$.proxy(this.handleClickExpressSuggest,this)),$(".js-business,.js-business-morrow").bind("click",$.proxy(this.handleClickBusinessMorrow,this)),$(".js-business-onAlternateDays").bind("click",$.proxy(this.handleClickBusinessOnAlternateDays,this)),$(".js-business-triduum").bind("click",$.proxy(this.handleClickBusinessTriduum,this)),$(".js-business-privacySurfaceSingle").bind("click",$.proxy(this.handleClickBusinessPrivacySurfaceSingle,this)),$(".js-business-freshDelivery").bind("click",$.proxy(this.handleClickBusinessFreshDelivery,this)),$(".js-business-recheneinheit").bind("click",$.proxy(this.handleClickBusinessRecheneinheit,this)),$(".js-business-enterpriseOrder").bind("click",$.proxy(this.handleClickBusinessEnterpriseOrder,this)),$(".js-business-cloudPrint").bind("click",$.proxy(this.handleClickBusinessCloudPrint,this)),$(".js-business-theDoorToTake").bind("click",$.proxy(this.handleClickBusinessTheDoorToTake,this)),$(".js-business-generationOfPickup").bind("click",$.proxy(this.handleClickBusinessGenerationOfPickup,this)),$(".js-business-payOnDelivery").bind("click",$.proxy(this.handleClickBusinessPayOnDelivery,this)),$(".js-business-freightCollectExpressItem").bind("click",$.proxy(this.handleClickBusinessFreightCollectExpressItem,this)),$(".js-business-signTheBillToReturn").bind("click",$.proxy(this.handleClickBusinessSignTheBillToReturn,this)),$(".js-business-supportValue").bind("click",$.proxy(this.handleClickBusinessSupportValue,this)),$(".js-business-afterSalesService").bind("click",$.proxy(this.handleClickBusinessAfterSalesService,this)),$(".js-business-hongkong").bind("click",$.proxy(this.handleClickBusinessHongkong,this)),$(".js-business-hongkongDhl").bind("click",$.proxy(this.handleClickBusinessHongkongDhl,this)),$(".js-business-taiwan").bind("click",$.proxy(this.handleClickBusinessTaiwan,this)),$(".js-business-ztoEms").bind("click",$.proxy(this.handleClickBusinessZtoEms,this)),$(".js-business-russia").bind("click",$.proxy(this.handleClickBusinessRussia,this)),$(".js-business-more").bind("click",$.proxy(this.handleClickMore,this)),$(".js-business-russian").bind("click",$.proxy(this.handleClickBusinessRussian,this)),$(".js-business-india").bind("click",$.proxy(this.handleClickBusinessIndia,this)),$(".js-business-europe").bind("click",$.proxy(this.handleClickBusinessEurope,this)),$(".js-business-england").bind("click",$.proxy(this.handleClickBusinessEngland,this)),$(".js-business-switzerlandOne").bind("click",$.proxy(this.handleClickBusinessSwitzerlandOne,this)),$(".js-business-switzerlandTwo").bind("click",$.proxy(this.handleClickBusinessSwitzerlandTwo,this)),$(".js-business-international").bind("click",$.proxy(this.handleClickBusinessInternational,this)),$(".js-business-australia").bind("click",$.proxy(this.handleClickBusinessAustralia,this)),$(".js-business-cloudPrint").bind("click",$.proxy(this.handleClickBusinessCloudPrint,this)),$(".js-case-personage").bind("click",$.proxy(this.handleClickCasePersonage,this)),$(".js-case-merchant").bind("click",$.proxy(this.handleClickCaseMerchant,this)),$(".js-case-website").bind("click",$.proxy(this.handleClickCaseWebsite,this)),$(".js-case-detail_01").bind("click",$.proxy(this.handleClickCaseDetail_01,this)),$(".js-legal-statement").bind("click",$.proxy(this.handleClickLegalStatement,this)),$(".js-privacy-protection").bind("click",$.proxy(this.handleClickPrivacyProtection,this)),$(".js-cookie-protection").bind("click",$.proxy(this.handleClickCookieProtection,this)),$(".js-express-ship").bind("click",$.proxy(this.expressShip,this)),$(".logo-box").bind("click",$.proxy(this.toIndex,this)),$(".js-business-korea").bind("click",$.proxy(this.handleClickContactKorea,this)),$(".js-business-japan").bind("click",$.proxy(this.handleClickContactJapan,this)),$(".js-contact-us").bind("click",$.proxy(this.handleClickContactUs,this)),$(".js-company-profile").bind("click",$.proxy(this.handleClickCompanyProfile,this)),$(".js-enterprise-video").bind("click",$.proxy(this.handleClickEnterpriseVideo,this)),$(".js-leadership-concern").bind("click",$.proxy(this.handleClickLeadershipConcern,this)),$(".js-corporate-development").bind("click",$.proxy(this.handleClickCorporateDevelopment,this)),$(".js-corporate-culture").bind("click",$.proxy(this.handleClickCorporateCulture,this)),$(".js-responsibility-honor").bind("click",$.proxy(this.handleClickResponsibilityHonor,this)),$(".js-charity").bind("click",$.proxy(this.handleClickCharity,this)),$(".js-new-list").bind("click",$.proxy(this.handleClickNewList,this)),$(".js-one-day").bind("click",$.proxy(this.handleClickOneDay,this)),$(".js-innovation").bind("click",$.proxy(this.handleClickInnovation,this)),$(".js-industry-new").bind("click",$.proxy(this.handleClickIndustryNews,this)),$(".js-express-outlets").bind("click",$.proxy(this.handleClickExpressOutlets,this)),$(".js-cooperate").bind("click",$.proxy(this.handleClickBusiness,this)),$(".js-supplier").bind("click",$.proxy(this.handleClicksupplier,this)),$(".js-case").bind("click",$.proxy(this.handleBotton,this)),$(".js-zpa").bind("click",$.proxy(this.handleClickZpaHome,this)),$(".js-zop").bind("click",$.proxy(this.handleClickZopHome,this)),$(".js-supermarket").bind("click",$.proxy(this.handleClickSupermarket,this)),$(".js-business-cloudChamber").bind("click",$.proxy(this.handleClickCloudChamber,this)),$(".js-business-serviceProducts").bind("click",$.proxy(this.handleClickServiceProducts,this)),$(".js-business-serviceScope").bind("click",$.proxy(this.handleClickServiceScope,this)),$(".js-business-cooperativePartner").bind("click",$.proxy(this.handleClickCooperativePartner,this)),$(".js-business-electronicsSurfaceSingle").bind("click",$.proxy(this.handleClickElectronicsSurfaceSingle,this)),$(".js-business-americaSmall").bind("click",$.proxy(this.handleClickBusinessAmericaSmall,this)),$(".js-business-americaFba").bind("click",$.proxy(this.handleClickBusinessAmericaFba,this)),$(".js-business-australiaFba").bind("click",$.proxy(this.handleClickBusinessAustraliaFba,this)),$(".js-business-canadaFba").bind("click",$.proxy(this.handleClickBusinessCanadaFba,this)),$(".js-business-europeFba").bind("click",$.proxy(this.handleClickBusinessEuropeFba,this)),$(".js-business-ctamSmall").bind("click",$.proxy(this.handleClickBusinessCtamSmall,this)),$(".js-business-depx").bind("click",$.proxy(this.handleClickBusinessDepx,this)),$(".js-investor-news").bind("click",$.proxy(this.handleClickInvestorNew,this)),$(".js-investor-report").bind("click",$.proxy(this.handleClickInvestorReport,this)),$(".js-investor-corporate").bind("click",$.proxy(this.handleClickInvestorCorporate,this)),$(".js-investor-email").bind("click",$.proxy(this.handleClickInvestorEmail,this)),$(".js-investor-vedio").bind("click",$.proxy(this.handleClickInvestorVedio,this)),$(".js-investor-liaison").bind("click",$.proxy(this.handleClickInvestorLiaison,this)),$(".js-report-financial").bind("click",$.proxy(this.handleClickFinancial,this)),$(".js-report-notice").bind("click",$.proxy(this.handleClickNotice,this)),$(".js-stock-price").bind("click",$.proxy(this.handleClickStockPrice,this)),$(".js-report-investor-relations").bind("click",$.proxy(this.handleClickReportInvestorRelations,this)),$(".js-report-social-responsibility").bind("click",$.proxy(this.handleClickSocialResponsibility,this)),$(".header-middle ul li").hover(function(){var e=$(this).index();$(".business-menu").removeClass("index-1"),$(".business-menu").removeClass("index-2"),$(".business-menu").removeClass("index-3"),$(".business-menu").removeClass("index-4"),$(".business-menu").removeClass("index-5"),$(this).find(".business-menu").addClass("index-"+e).show()},function(){$(this).find(".business-menu").hide()}),$(".siteTxt").click(function(e){SelCity(this,e)}),$(".stateTxt").click(function(e){SelState(this,e)}),$(".registere").click(function(){location.href="https://my.zto.com"}),$(".login").click(function(){window.open(zto.config.centerceUrl,"_blank")})},handleCliclNav:function(e){var i=$(e.target).parent();0<i.find(".nav-zto-menu").length&&(i.hasClass("show")?i.removeClass("show"):i.addClass("show"))},handleClickHomePage:function(){location.href="../index.html"},handleClickBackTop:function(){$("body, html").animate({scrollTop:"0"},200)},handleClickAbout:function(){location.href="../companyIntroduce/companyProfile.html"},handleClickJob:function(){window.open("http://hr.zto.com")},handleClickFinance:function(){window.open("https://www.ztofinance.com/")},gohrclick:function(){window.open("http://www.hotjob.cn/wt/ZTO/web/index?brandCode=1")},handleClickInvestorRelations:function(){window.open("http://zto.investorroom.com/")},handleClickCooperation:function(){location.href="../league/expressOutlets.html"},handleClickExpressCheck:function(){location.href="../express/expressCheck.html"},handleClickExpressWebsite:function(){location.href="../express/expressWebsite.html"},handleClickExpressPrice:function(){location.href="../express/expressPrice.html"},handleClickExpressProhibited:function(){location.href="../express/expressProhibited.html"},handleClickExpressComplain:function(){location.href="../express/expressComplain.html"},handleClickExpressQuestions:function(){location.href="https://my.zto.com/faq"},handleClickExpressSuggest:function(){location.href="https://my.zto.com/feedback"},handleClickBusinessMorrow:function(){location.href="../business/morrow.html"},handleClickBusinessOnAlternateDays:function(){location.href="../business/onAlternateDays.html"},handleClickBusinessTriduum:function(){location.href="../business/triduum.html"},handleClickBusinessPrivacySurfaceSingle:function(){location.href="../business/privacySurfaceSingle.html"},handleClickBusinessFreshDelivery:function(){location.href="../business/freshDelivery.html"},handleClickBusinessRecheneinheit:function(){location.href="../business/recheneinheit.html"},handleClickBusinessEnterpriseOrder:function(){location.href="../business/enterpriseOrder.html"},handleClickBusinessCloudPrint:function(){location.href="../business/cloudPrint.html"},handleClickBusinessTheDoorToTake:function(){location.href="../business/theDoorToTake.html"},handleClickBusinessGenerationOfPickup:function(){location.href="../business/generationOfPickup.html"},handleClickBusinessPayOnDelivery:function(){location.href="../business/payOnDelivery.html"},handleClickBusinessFreightCollectExpressItem:function(){location.href="../business/freightCollectExpressItem.html"},handleClickBusinessSignTheBillToReturn:function(){location.href="../business/signTheBillToReturn.html"},handleClickBusinessSupportValue:function(){location.href="../business/supportValue.html"},handleClickBusinessAfterSalesService:function(){location.href="../business/afterSalesService.html"},handleClickBusinessHongkong:function(){location.href="../business/hongkong.html"},handleClickBusinessHongkongDhl:function(){location.href="../business/hongkongDhl.html"},handleClickBusinessTaiwan:function(){location.href="../business/taiwan.html"},handleClickBusinessRussia:function(){location.href="../business/russia.html"},handleClickMore:function(){window.open("http://g.zto.com")},handleClickBusinessZtoEms:function(){location.href="../business/ztoEms.html"},handleClickBusinessRussian:function(){location.href="../business/russian.html"},handleClickBusinessEurope:function(){location.href="../business/europe.html"},handleClickBusinessEngland:function(){location.href="../business/england.html"},handleClickBusinessIndia:function(){location.href="../business/india.html"},handleClickBusinessAmericaSmall:function(){location.href="../business/americaSmall.html"},handleClickBusinessSwitzerlandOne:function(){location.href="../business/switzerlandOne.html"},handleClickBusinessSwitzerlandTwo:function(){location.href="../business/switzerlandTwo.html"},handleClickBusinessInternational:function(){location.href="../business/international.html"},handleClickBusinessAustralia:function(){location.href="../business/australia.html"},handleClickBusinessCloudPrint:function(){location.href="../business/cloudPrint.html"},handleClickCasePersonage:function(){location.href="../case/personage.html"},handleClickCaseMerchant:function(){location.href="../case/merchant.html"},handleClickCaseWebsite:function(){location.href="../case/website.html"},handleClickCaseDetail_01:function(){location.href="../case/caseDetail_01.html"},handleClickLegalStatement:function(){location.href="../legal&privacy/legal.html"},handleClickPrivacyProtection:function(){location.href="../legal&privacy/privacy.html"},handleClickCookieProtection:function(){location.href="../legal&privacy/cookie.html"},toIndex:function(){location.href="../index.html"},handleClickContactKorea:function(){location.href="../business/korea.html"},handleClickContactJapan:function(){location.href="../business/japan.html"},handleClickContactUs:function(){location.href="../companyIntroduce/contactUs.html"},handleClickCompanyProfile:function(){location.href="../companyIntroduce/companyProfile.html"},handleClickEnterpriseVideo:function(){location.href="../companyIntroduce/enterpriseVideo.html"},handleClickCharity:function(){location.href="../companyIntroduce/charityProgram.html"},handleClickNewList:function(){location.href="../companyIntroduce/newList.html"},handleClickLeadershipConcern:function(){location.href="../companyIntroduce/leadershipConcern.html"},handleClickCorporateDevelopment:function(){location.href="../companyIntroduce/corporateDevelopment.html"},handleClickCorporateCulture:function(){location.href="../companyIntroduce/corporateCulture.html"},handleClickResponsibilityHonor:function(){location.href="../companyIntroduce/responsibilityHonor.html"},handleClickOneDay:function(){location.href="../companyIntroduce/oneDay.html"},handleClickInnovation:function(){location.href="../companyIntroduce/innovation.html"},handleClickIndustryNews:function(){location.href="../companyIntroduce/industryNews.html"},handleClickExpressOutlets:function(){location.href="../league/expressOutlets.html"},handleClickBusiness:function(){location.href="../league/cooperate.html"},handleClicksupplier:function(){location.href="../league/supplier.html"},handleBotton:function(){location.href="../case/merchant.html"},handleClickZpaHome:function(){window.open("https://zpa.zto.com")},handleClickZopHome:function(){window.open("http://zop.zto.com")},handleClickSupermarket:function(){window.open("https://wjsso.zto.com/oauth2/authorize?appid=zt-oNKHuI_ViWtkBdmbiIk1w&redirect_uri=http%3a%2f%2fwj.zto.com%2fAccount%2fAuthorize&response_type=code&scope=userinfo&state=3eb79d2915844534a23f4c3ff1c3cedb")},handleClickCloudChamber:function(){location.href="../business/cloudChamber.html"},handleClickServiceProducts:function(){location.href="../business/serviceProducts.html"},handleClickServiceScope:function(){location.href="../business/serviceScope.html"},handleClickCooperativePartner:function(){location.href="../business/cooperativePartner.html"},handleClickElectronicsSurfaceSingle:function(){location.href="../business/electronicsSurfaceSingle.html"},expressShip:function(){window.open("https://my.zto.com/create")},handleClickBusinessAmericaFba:function(){location.href="../business/americaFba.html"},handleClickBusinessAustraliaFba:function(){location.href="../business/australiaFba.html"},handleClickBusinessCanadaFba:function(){location.href="../business/canadaFba.html"},handleClickBusinessEuropeFba:function(){location.href="../business/europeFba.html"},handleClickBusinessCtamSmall:function(){location.href="../business/ctamSmall.html"},handleClickBusinessDepx:function(){location.href="../business/depx.html"},handleClickInvestorNew:function(){location.href="../investorRelations/newsInformation.html"},handleClickInvestorReport:function(){location.href="../investorRelations/periodicReport.html"},handleClickInvestorCorporate:function(){location.href="../investorRelations/corporateGovernance.html"},handleClickInvestorEmail:function(){location.href="../investorRelations/mailSubscriptions.html"},handleClickInvestorVedio:function(){location.href="../investorRelations/companyVedio.html"},handleClickInvestorLiaison:function(){location.href="../investorRelations/investorLiaison.html"},handleClickFinancial:function(){location.href="../investorRelations/periodicReport.html?checkedId=0"},handleClickNotice:function(){location.href="../investorRelations/periodicReport.html?checkedId=1"},handleClickReportInvestorRelations:function(){location.href="../investorRelations/periodicReport.html?checkedId=2"},handleClickSocialResponsibility:function(){location.href="../investorRelations/periodicReport.html?checkedId=3"},handleClickStockPrice:function(){location.href="../investorRelations/stockPrice.html"}}),(new s).init()},26:function(e,i,s){function c(e,i,s,n){$("."+e).click(function(){var e=$(this).index();$(this).addClass(s).siblings().removeClass(s),$("."+i+":eq("+e+")").addClass(n).siblings().removeClass(n)})}function a(){var e,i,s="";if($(".bill-title-way").hasClass("bill-title-selected"))if(0<$(".ex_item").size()){for(var n=0,t=$(".ex_item").length;n<t;n++)s+=n==t-1?$(".ex_item:eq("+n+")").find("span").html():$(".ex_item:eq("+n+")").find("span").html()+",";window.location.href="express/expressCheck.html",r(s.split(","))}else""!=$(".query_txt").val()&&ztoAlert("提示","运单号错误！","确定","close");else e=$(".phone-search-input").val(),i=function(e){e?ztoAlert("提示",e,"确定",""):window.location.href="express/expressCheck.html?phoneBill="+$(".phone-search-input").val()},e?0<=e.indexOf(" ")?i&&i("手机号不能含有空格"):/^1\d{10}$/.test(e)||/^[0,4]\d{2,3}-?\d{7,8}$/.test(e)?i&&i():i&&i("手机号格式不正确"):i&&i("手机号不能为空")}function r(e){sessionStorage.removeItem("billCode"),sessionStorage.setItem("billCode",JSON.stringify(e))}s(3),$(function(){HrPost("BannerPicture_GetList",{bannerType:1},function(e){var i="",s=e.result.items;for(var n in s)null!=s[n].bannerUrl?i+='<a href="'+s[n].bannerUrl+'" target="_blank" class="banner-item toZtts"><img src="'+s[n].bannerPic+'"></a>':i+='<a href="javascript:void(0)" class="banner-item"><img src="'+s[n].bannerPic+'"></a>';i+='<div class="banner-num"></div>',$(".banner-box").html(i),ImgRunOpcity(".banner-box",".banner-item",".banner-num","dot","int1","run1","change1",5e3)});var e=getCookie("wechatSwitch");console.log(e,"wechatSwitch"),null==e||""==e||null==e?($("#wechatPopup").css("display","block"),setTimeout(function(){$("#wechatPopup").addClass("hide"),setCookieWeek("wechatSwitch","false"),setTimeout(function(){$("#wechatPopup").css("display","none"),$("#wechatHint").css("display","block")},400)},5e3)):$("#wechatHint").css("display","block"),window.onload=function(){localStorage.getItem("cookie_policy")||$(".cookie_box").removeClass("cookie_none")},$(".cookie_agree").click(function(){$(".cookie_box").addClass("cookie_none"),localStorage.setItem("cookie_policy",!0)});var i=getCookie("codes");if(null==i)$(".search-record em").html("无");else{var s=i.split(","),n=s[s.length-1].split("-");$(".search-record .s-code").html(n[0]),$(".search-record .s-state").html("【"+n[1]+"】")}HrPost("News_GetSideList",{},function(e){if(e&&null!=e.result){for(var i=e.result.items,s="",n=0;n<i.length;n++)s+='<a href="./companyIntroduce/newsListDetail.html?id='+i[n].id+'" class="newsSpecial-item">\t                                <img src="'+i[n].imageUrl+'">\t                                <strong>'+i[n].title+"</strong>\t                                <p>"+i[n].content+"</p>\t                                <i></i>\t                            </a>";$(".news-special").html(s)}}),HrPost("News_GetList",{category:"公司动态",pageSize:6,pageIndex:1},function(e){for(var i=e.result.items,s="",n=0,t=i.length;n<t;n++){var l=i[n].inputTime.replace("T"," ").substr(0,10);s+='<a class="news-item clearboth" href="./companyIntroduce/newsListDetail.html?id='+i[n].id+'">\t                        <span>'+i[n].title+"</span>\t                        <em>"+l+"</em>\t                    </a>"}$(".news-list.company").html(s)}),HrPost("News_GetList",{category:"行业新闻",pageSize:6,pageIndex:1},function(e){for(var i=e.result.items,s="",n=0,t=i.length;n<t;n++){var l=i[n].inputTime.replace("T"," ").substr(0,10);s+='<a class="news-item clearboth" href="./companyIntroduce/industryNewsDetail.html?id='+i[n].id+'">\t                        <span>'+i[n].title+"</span>\t                        <em>"+l+"</em>\t                    </a>"}$(".news-list.industry").html(s)}),$(".query_txt").focus(function(){$(".bill-search").addClass("show"),$(".bill-title-way").addClass("bill-title-selected")}),$(".bill-title-way").click(function(){$(".bill-search").addClass("show"),$(".query_txt").val(""),$(this).addClass("bill-title-selected"),$(".bill-title-phone").removeClass("bill-title-selected"),$(".phone-search-input").addClass("hidden"),$(".query_txt").removeClass("hidden")}),$(".bill-title-phone").click(function(){$(".phone-search-input").val(""),$(".bill-search").addClass("show"),$(this).addClass("bill-title-selected"),$(".bill-title-way").removeClass("bill-title-selected"),$(".query_txt").addClass("hidden"),$(".phone-search-input").removeClass("hidden")}),$("#tab_onlineShipping").click(function(){$(".bill-search").addClass("show")}),$(document).click(function(e){var i=$(".bill-search");i.is(e.target)||0!==i.has(e.target).length||i.removeClass("show")}),$(".query_txt").keyup(function(){var e=$(this),i=e.val().replace(/\,|\，|\;|\；|\s+/g,","),s=(i.length,$(".ex_item").size());if(s<10){var n=i.split(",");if(1<n.length)for(var t=0;t<n.length;t++)if(12<=n[t].length&&n[t].length<=16){if(13==n[t].length);else if(s<10){for(var l=0,o=0;o<s;o++)n[t]!=$(".ex_item:eq("+o+") span").html()&&l++;l==s?(10<=t?ztoAlert("提示","单次查询订单数量最多为10条！","确定",""):e.before('<div class="ex_item">\t                                            <span>'+n[t]+"</span>\t                                            <i></i>\t                                        </div>"),e.val("").attr("placeholder",""),t===n.length-1&&(n="",e.val("").attr("placeholder",""),e.blur())):ztoAlert("提示","您输入的订单号重复啦！","确定","queryToText")}}else 16<n[t].length||e.val("").attr("placeholder","在此输入单号")}else e.val("").attr("placeholder",""),e.blur(),ztoAlert("提示","单次查询订单数量最多为10条！","确定","")}),$(".query_txt").keydown(function(e){var i,s,n=$(this),t=(i=n.val()).length;8==e.keyCode&&(""!=(i=n.val())&&null!=i&&" "!=i||$(".ex_item").last().remove());if(13==e.keyCode)if($(".ex_item").size()<1)12<=t&&t<=16?13==t?(n.val("").attr("placeholder","在此输入单号"),ztoAlert("提示","请正确输入中通运单号，最少12位，最大16位，多个用；号隔开！","确定","")):(s=$(".ex_item").size())<10?(n.before('<div class="ex_item">\t                                    <span>'+i+"</span>\t                                    <i></i>\t                                </div>"),n.blur(),n.val("").attr("placeholder",""),a()):ztoAlert("提示","单次查询订单数量最多为10条！","确定",""):ztoAlert("提示","请正确输入中通运单号，最少12位，最大16位，多个用；号隔开！","确定","");else if(12<=t&&t<=16)if(13==t)n.val("").attr("placeholder",""),ztoAlert("提示","请正确输入中通运单号，最少12位，最大16位，多个用；号隔开！","确定","");else if((s=$(".ex_item").size())<10){for(var l=0,o=0;o<s;o++)i!=$(".ex_item:eq("+o+") span").html()&&l++;l==s?(n.before('<div class="ex_item">\t                                    <span>'+i+"</span>\t                                    <i></i>\t                                </div>"),n.blur(),n.val("").attr("placeholder","")):ztoAlert("提示","您输入的订单号重复啦！","确定","queryToText")}else ztoAlert("提示","单次查询订单数量最多为10条！","确定","");else a()}),$(document).on("dblclick",".ex_item span",function(e){e.stopPropagation(),e.preventDefault();var i=$(this).html(),s=$(this).parent();s.addClass("ex_item_edit"),$(this).parent().html('<input type="text" id="input" value="'+i+'">'),setTimeout(function(){s.children().focus()},50)}),$(document).on("blur",".ex_item input",function(){var e=$(this).val(),i=$(this).parent();if(12<=e.length&&e.length<=16)if(13==e.length)$(this).parent().remove(),ztoAlert("提示","请正确输入中通运单号，最少12位，最大16位，多个用；号隔开！","确定","");else{for(var s=$(".ex_item").size(),n=0,t=0;t<s;t++)e!=$(".ex_item:eq("+t+") span").html()&&n++;n==s?($(this).parent().html("<span>"+e+"</span><i></i>"),i.removeClass("ex_item_edit")):(ztoAlert("提示","您输入的订单号重复啦,请重新输入！","确定","queryToText"),$(this).parent().remove())}else ztoAlert("提示","请正确输入中通运单号，最少12位，最大16位，多个用；号隔开！","确定",""),$(this).parent().remove()}),$(document).on("click",".ex_item i",function(){$(this).parent().remove()}),$(".search_btn").click(function(){if($(".bill-title-way").hasClass("bill-title-selected")){var e=$(".query_txt").val(),i=e.length;if($(".ex_item").size()<1)12<=i&&i<=16?13==i?ztoAlert("提示","请正确输入中通运单号，最少12位，最大16位，多个用；号隔开！","确定",""):($(".query_txt").before('<div class="ex_item">\t                                            <span>'+e+"</span>\t                                            <i></i>\t                                        </div>"),$(".query_txt").blur(),$(".query_txt").val("").attr("placeholder",""),a()):ztoAlert("提示","请正确输入中通运单号，最少12位，最大16位，多个用；号隔开！","确定","");else if(12<=i&&i<=16)if(13==i)ztoAlert("提示","请正确输入中通运单号，最少12位，最大16位，多个用；号隔开！","确定","");else{var s=$(".ex_item").size();if(s<10){for(var n=0,t=0;t<s;t++)e!=$(".ex_item:eq("+t+") span").html()&&n++;n==s?($(".query_txt").before('<div class="ex_item">\t                                        <span>'+e+"</span>\t                                        <i></i>\t                                    </div>"),$(".query_txt").blur(),$(".query_txt").val("").attr("placeholder",""),a()):ztoAlert("提示","您输入的订单号重复啦！","确定","queryToText")}else ztoAlert("提示","单次查询订单数量最多为10条！","确定","")}else a()}else a()}),$(document).on("click",".search-record em",function(){var e=$(".s-code").html();null!=e&&(window.location.href="express/expressCheck.html",r(e.split(",")))});var t=0,l=setInterval(function(){2<++t&&(t=0),t<0&&(t=2),$(".itemMenu-item:eq("+t+")").addClass("checked").siblings().removeClass("checked"),$(".item-box:eq("+t+")").addClass("show").siblings().removeClass("show")},5e3);$(".clearSet").hover(function(){clearInterval(l)},function(){l=setInterval(function(){2<++t&&(t=0),t<0&&(t=2),$(".itemMenu-item:eq("+t+")").addClass("checked").siblings().removeClass("checked"),$(".item-box:eq("+t+")").addClass("show").siblings().removeClass("show")},5e3)}),$(".itemMenu-item").click(function(){var e=$(this).index();t=e});var o=0;$(".advantage-btn").click(function(){$(this).hasClass("next")?o<2?o++:o=0:0<o?o--:o=2,$(".advantage-room").stop(!1,!1).animate({left:"-"+1200*o+"px"},300),$(".advantage-num .num-item:eq("+o+")").addClass("checked").siblings().removeClass("checked")}),$(".advantage-num .num-item").click(function(){var e=$(this).index();o=e,$(this).addClass("checked").siblings().removeClass("checked"),$(".advantage-room").stop(!1,!1).animate({left:"-"+1200*e+"px"},300)}),$("#wechatPopupClose").click(function(){setCookieWeek("wechatSwitch","false"),$("#wechatPopup").addClass("hide"),setTimeout(function(){$("#wechatPopup").css("display","none"),$("#wechatHint").css("display","block")},400)}),$("#wechatHintClose").click(function(){$("#wechatHint").css("display","none")}),c("businessMenu-item","business-item","checked","show"),c("itemMenu-item","item-box","checked","show"),c("newsMenu-item","news-list","checked","show")})}});