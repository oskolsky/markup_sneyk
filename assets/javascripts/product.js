$(function() {

    var fake = [
        {
            flavor: "Кактус",
            volumes: [{volume: "100г"}, {volume: "200г"}, {volume: "300г"}]
        },
        {
            flavor: "Береза",
            volumes: ""
        },
        {
            flavor: "Ландыши",
            volumes: [{volume: "150г"}, {volume: "220г"}, {volume: "340г"}]
        },
        {
            flavor: "Ягода",
            volumes: [{volume: "160г"}, {volume: "230г"}, {volume: "330г"}]
        },
        {
            flavor: "Банан",
            volumes: [{volume: "170г"}, {volume: "240г"}, {volume: "320г"}]
        },
        {
            flavor: "Ваниль",
            volumes: [{volume: "180г"}, {volume: "250г"}]
        },
        {
            flavor: "Ирис",
            volumes: [{volume: "110г"}, {volume: "250г"}, {volume: "330г"}]
        },
        {
            flavor: "Кофе",
            volumes: ""
        }
    ];

    //
    // .. List view (model)
    //
    var ListView = Backbone.View.extend({
        tagName: 'li', className: 'card-product_value_i',

        events: {
            'click .card-product_value_i_a.__flavor': 'selectFlavor',
            'click .card-product_value_i_a.__volume': 'selectVolume'
        },

        initialize: function(options) {
            this.template = options.template;
        },

        selectItem: function() {
            this.$el.closest('.card-product_value').find('.card-product_value_i_a.__current').removeClass('__current');
            this.$el.find('.card-product_value_i_a').addClass('__current');
            return this;
        },

        selectFlavor: function() {
            this.selectItem();
            $('#volumes').find('.card-product_value').html('');
            new ListsView({data: this.model.get('volumes'), el: $('#volumes')[0], template: '#card-product-volume-item'});
            return false;
        },

        selectVolume: function() {
            this.selectItem();
            return false;
        },

        render: function() {
            this.$el.html(_.template($(this.template).html())(this.model.toJSON()));
            return this;
        }
    });

    //
    // .. Lists view (collection)
    //
    var ListsView = Backbone.View.extend({

        initialize: function(options) {

            if (options.data.length > 0) {
                this.$el.show();
                
                this.template = options.template;
                this.collection = new Backbone.Collection(options.data);
                this.render();
            } else {
                this.$el.hide();
            }

        },

        render: function() {
            this.collection.each(this.addOne, this);
            return this;
        },

        addOne: function(model) {
            var view = new ListView({model: model, template: this.template});
            var item = view.render().el;
            this.$el.find('.card-product_value').append(item);
        }
    });

    new ListsView({data: fake, el: $('#flavors')[0], template: '#card-product-flavor-item'});

});










// //****************************************************************************************************
// //
// // .. ADD TO BASKET
// //
// //****************************************************************************************************
// //
// // .. Select
// //
// $(document).on('click', '.card-product_value_i_a', function() {

//   if ( !$(this).hasClass('__disabled') ) {
    
//     $(this).closest('.card-product_value').find('.card-product_value_i_a.__current').removeClass('__current');
//     $(this).addClass('__current');

//   } else {

//     alert('Нужно выбрать вкус');

//   }

//   return false;
// });



// $(function() {

//   var flavors = [];
//   var volumes = [];

//   //
//   // .. Group
//   //

//   gon.items.forEach(function(entry) {
//     flavors.push(entry.flavor);
//     volumes.push(entry.volume);
//   });

//   // var groupItems_flavor = _.groupBy(gon.items, 'flavor');
//   // var groupItems_volume = _.groupBy(gon.items, 'volume');

//   // console.log(groupItems_flavor);
//   // console.log(groupItems_volume);

//   var flavors_group = _.groupBy(flavors);
//   // var volumes_group = _.groupBy(volumes);

//   console.log(flavors_group);
//   // // console.log(volumes_group);

// });