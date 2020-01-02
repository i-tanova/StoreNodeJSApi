
        mapboxgl.accessToken = 'pk.eyJ1IjoiaXRhbm92YSIsImEiOiJjaXFpM3EyMmswMGJiaHJuaGF2c2RjcWNtIn0.b6omU20LBH-CxyccGrqpLQ';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 9, 
            center: [-71.157895, 42.707741]
        });