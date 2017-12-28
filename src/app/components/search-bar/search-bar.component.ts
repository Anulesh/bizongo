import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router, Params} from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private service: ProductServiceService) {
    this.createForm();
    this.logNameChange();
    //this.getDataSer();
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
    route.params.subscribe((params: Params) => {
      let query = params['q'];
      console.log("in d");

      if (query !== '') {
        this.service.getData(query);
      }
    });
  }

  ngOnInit() {
    
  }

  getDataSer() {
    
  }
  createForm() {
    this.searchForm = this.fb.group({
      searchKey: ['', Validators.required ],
    });
  }
  logNameChange() {/* Coming soon */}

  onSubmit({ value, valid }) {
    console.log(value, valid);
    this.router.navigate([''], { queryParams: { q: value.searchKey } });
}
}
