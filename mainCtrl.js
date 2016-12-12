angular.module('ecom')
    .controller('mainCtrl', function($scope) {
        //hamberguer menu jquery
        $(".cross").hide();
        $(".menu").hide();
        $(".hamburger").click(function() {
            $(".menu").slideToggle("fast", function() {
                $(".hamburger").hide();
                $(".cross").show();
            });
        });

        $(".cross").click(function() {
            $(".menu").slideToggle("slow", function() {
                $(".cross").hide();
                $(".hamburger").show();
            });
        });
    })
