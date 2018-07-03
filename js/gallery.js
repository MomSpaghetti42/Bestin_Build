$(document).ready(function(){

    function passData(x) {
        $(".gallery_article").fadeOut('slow').promise().done(function(){
            $(".gallery__h1").html(gallery[x].tittle);
            $(".gallery__p1").html(gallery[x].discription);
            $(".gallery__img").attr( "src", gallery[x].screen);
            $(".gallery_article").fadeIn('slow');
         }); 
        $(".select_cursor").css({top: 21 + ( x * 55 )});   
    };

    function switchSelector(x, y, z) {
        $(y).removeClass(x);
        $(z).addClass(x);
    };

    var gallery = [
        {
            tittle: "Architecture and urban design",
            discription: "Virtual visualization of future buildings and flats allows customers and executors to investigate rooms and floors before the construction of foundation. Constructors and designers will get the opportunity to demonstrate ideas using 3D images.",
            screen: "gal_img/house.svg",
        },
        {
            tittle: "Light and heavy industry",
            discription: "In the automotive industry VR technology provides virtual crash testing, automobile layout modeling, creation and demonstration of ergonomic interior design and future vehicle frame. Shipping industry includes vessel’s construction modeling, analysis of installation work complexity, equipment layouts. The advantage for extracting industry consists of visual models creation, deposits and boreholes modeling for geophysical analysis.",
            screen: "gal_img/Light.svg",
        },
        {
            tittle: "Employee education",
            discription: "The main aim of creation of applications simulating machine and products operations is to familiarize employees with new equipment. Apart from that VR technology envisages testing applications, emergency situation and catastrophe modeling.",
            screen: "gal_img/diploma.svg",
        },
        {
            tittle: "Education",
            discription: "VR technology offers modern approach to scientific and guidance material supply in schools and universities. Historical events, experimental laboratories, natural phenomena modeling will raise the quality of tasks accomplishment and accelerate the process of foreign language learning. Participants of VR system are able to interact with each other, do experiments and participate in various scientific developments from different parts of the world.",
            screen: "gal_img/books.svg",

        },
        {
            tittle: "Art and mass events",
            discription: "The possibility to visit private museum houses, to see the specimens lost and the monuments reconstructed, to watch panoramic movies about the historical epoch one is interested in, has become available because of VR technology. Apart from that, museums, cinemas and other cultural institutions have got the chance to create installations, hold exhibitions and organize mass events in virtual space.",
            screen: "gal_img/Art.svg",
        },
        {
            tittle: "Tourism",
            discription: "Travelling to different countries, presentations of cities and countries, holding advertising campaigns attracting tourists are now available in VR",
            screen: "gal_img/planet.svg",
        },
        {
            tittle: "Marketing and advertising ",
            discription: "VR technology is an amazing opportunity to demonstrate any new product from all the angles including complex technical details or other constructions. Flats and buildings visualization is now available for real estate and urban planning companies.",
            screen: "gal_img/marketing.svg",
        },
    ];

    $.each( gallery, function( index, value ) {
        $("<li><span class=" + "'gallery__tittle'"+">"+ gallery[index].tittle +"</span></li>").appendTo(".gallery_list").attr( "gal_index", index);
        $("<li class="+"'respon_gallery_item'"+"></li>").appendTo(".respon_gallery_list").attr( "gal_index", index);
    });
    $(" li[gal_index='0'] span").addClass("active");
    $(" .respon_gallery_item[gal_index='0'] ").addClass("respon_active");
    passData(0);

    $(".gallery__tittle").on("click", function (event){
        switchSelector("active", ".active", this);
        gal_index = $(this).parent().attr('gal_index');
        $(".respon_gallery_item").removeClass("respon_active");
        $(".respon_gallery_item[gal_index='"+gal_index+"']").addClass("respon_active");
        passData(gal_index);

    });

    $(".respon_gallery_item").on("click", function (event){
        switchSelector("respon_active", ".respon_active", this);
        gal_index = $(this).attr('gal_index');
        $(".gallery__tittle").removeClass("active");
        $("li[gal_index='"+gal_index+"'] .gallery__tittle").addClass("active");
        passData(gal_index);
    });

    $(".textarea").on("click", function (event){
        $(".title_area").fadeOut('slow', function(){
            $(".textarea").css({textIndent: 0});
        });
        // $(".textarea").css({textIndent: 0});
    });

 });
