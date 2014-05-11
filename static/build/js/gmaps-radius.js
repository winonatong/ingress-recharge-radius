/*! Made by Oliver Beattie. Built 2013-11-29 */
/*! Updated by Winona Tong. Built 2014-05-10 */

(function () {
    $(function () {
        var renderRadii, a, b, c, d, e, f;
        return c = new google.maps.Map($("#map")[0], {
            zoom: 5,
            center: new google.maps.LatLng(37.7496654,-122.4099026),
            mapType: google.maps.MapTypeId.ROADMAP
        }),
        b = {
                mi: 3963.1676,
                km: 6378.1,
                ft: 20925524.9,
                mt: 6378100,
                "in": 251106299,
                yd: 6975174.98,
                fa: 3487587.49,
                na: 3443.89849,
                ch: 317053.408,
                rd: 1268213.63,
                fr: 31705.3408
        },
        d = function () {
                return this.setMap(null)
        },
        a = function (e) {
            var f, g;
            return g = 250, g = g / b['km'] * b.mt, f = new google.maps.Circle({
                center: e.latLng,
                clickable: !0,
                draggable: !1,
                editable: !1,
                fillColor: "#004de8",
                fillOpacity: .10,
                map: c,
                radius: g,
                strokeColor: "#004de8",
                strokeOpacity: .62,
                strokeWeight: 1
            }), google.maps.event.addListener(f, "rightclick", d), google.maps.event.addListener(f, "click", a)
        },
        renderOne = function (i, latLng) {
            var f, g;
            return g = i*250, g = g / b['km'] * b.mt, f = new google.maps.Circle({
                center: latLng,
                clickable: !0,
                draggable: !1,
                editable: !1,
                fillColor: "#004de8",
                fillOpacity: .10,
                map: c,
                radius: g,
                strokeColor: "#004de8",
                strokeOpacity: .62,
                strokeWeight: 1
            })
        },
        renderRadii = function (e) {
            for (var i = 1; i <= 16; i++) {
                if ($("#level"+i).is(':checked')) {
                    renderOne(i, e.latLng);
                }
            }
            return google.maps.event.addListener(f, "rightclick", d), google.maps.event.addListener(f, "click", renderOne);
        },
        google.maps.event.addListener(c, "click", renderRadii), f = document.getElementById("searchInput"), $(f.form).on({
            submit: function () {
                return !1
            }
        }),
        e = new google.maps.places.SearchBox(f), google.maps.event.addListener(e, "places_changed", function () {
            var renderRadii, b;
            renderRadii = null != (b = e.getPlaces()[0]) ? b.geometry.viewport : void 0, null != renderRadii && (c.fitBounds(renderRadii), c.panToBounds(renderRadii))
        })
    })
}).call(this);
//# sourceMappingURL=gmaps-radius.js.map