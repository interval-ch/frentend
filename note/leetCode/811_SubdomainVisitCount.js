/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = function(cpdomains) {
  let output = {};
  let visitCount = 0;
	let domains, domainComponent, keyname;
  
  for (let i of cpdomains) {
    visitCount = Number(i.split(' ')[0]);
		domains = i.split(' ')[1];
		domainComponent = domains.split('.');

		console.log('hi');
		for (let j = 0; j < domainComponent.length; j++) {
			let copy = [...domainComponent];
			keyname = copy.splice(j, domainComponent.length);

			if (output[(keyname.join('.'))]) {
				output[(keyname.join('.'))] += visitCount;
			} else {
				output[(keyname.join('.'))] = visitCount;
			}
		}
  }
	return Object.keys(output).map(key => output[key] + ' ' + key
	)
};

let cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(cpdomains));