import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


def create_driver():
    options = Options()
    options.add_argument('--headless')
    return webdriver.Chrome(options=options)


def take_screenshot(driver, width, height, path):
    directory = os.path.dirname(path)
    if not os.path.exists(directory):
        os.makedirs(directory)
    absolute_path = os.path.abspath(path)
    driver.set_window_size(width, height)
    driver.save_screenshot(absolute_path)

if __name__ == '__main__':
    driver = create_driver()
    driver.get('https://ozmds.github.io/minymal/')
    take_screenshot(driver, 1440, 810, './screenshots/' + 'desktop.png')
    take_screenshot(driver, 1024, 768, './screenshots/' + 'tablet.png')
    take_screenshot(driver, 375, 667, "./screenshots/" + 'mobile.png')
    driver.close()
