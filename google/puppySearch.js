const { By } = require('selenium-webdriver');

const puppySearch = async (driver) => {
  const searchInput = await driver.findElement(By.name('q'));

  searchInput.clear();
  searchInput.sendKeys('Puppies\n');

  await driver.sleep(1000);
  await driver.findElement(By.xpath('(//a[text()="Images"])[1]')).click();
};

module.exports = {
  puppySearch,
};
