import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  styles: ['agm-map { height: 300px; /* height is required */ }'],
  template: `
    <agm-map [latitude]='latitude' [longitude]='longitude' 
      [mapTypeId]='mapType'>
    </agm-map>
  `
})
export class MapComponent {
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';
}
