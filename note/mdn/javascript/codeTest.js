

var BrowserHistorys = function(homepage) {
	this.current = homepage;
	this.history = [homepage];
	this.forward = [];
	this.prototype = {};
};

/** 
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function(url) {
this.history.push(this.current);  
this.current = url;
this.forward = [];
return null;
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
if (this.history.length === 0) {}
else if (this.history.length >= steps) {
	this.current = this.history[this.history.length - steps];
	this.forward = this.history.slice(this.history.length - steps + 1,);
	this.history = this.history.slice(0,-steps);
}
else if (this.history.length < steps) {
	this.current = this.history[0];
	this.forward = this.history.slice(1,);
	this.history = [];
}
return this.current;
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
this.current = 'aaaa';
return this.current
};

/** 
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/