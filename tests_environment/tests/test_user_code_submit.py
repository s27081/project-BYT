import pytest
import time
from selenium import webdriver
from selenium.webdriver import ActionChains, Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By


@pytest.fixture()
def setup_browser():
    options = Options()
    options.add_argument("--start-maximized")
    driver = webdriver.Chrome(options=options)

    driver.get("http://localhost:3000/")
    cookie_script = """
    document.cookie = "session=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNU3dpWlcxaGFXd2lPaUp3ZVhSb2IyNUFkM0F1Y0d3aUxDSnBZWFFpT2pFM016WTBOREV3TnpaOS45R0l6bXZFU185N2tsZTQ0OFd1LWhWNVQ2X3NVa3lQRVJmeXdveFgwYldZIn0=; path=/; domain=localhost";
    """
    driver.execute_script(cookie_script)

    driver.get("http://localhost:3000/dashboard/Tasks/1")

    time.sleep(5)

    div = driver.find_element(By.XPATH, "/html/body/div[2]/div[2]/div[2]/section/div/div/div[1]/div[2]/div[1]/div[4]")
    div.click()
    actions = ActionChains(driver)
    actions.key_down(Keys.CONTROL).send_keys('a').key_up(Keys.CONTROL)
    actions.send_keys(Keys.BACKSPACE)
    actions.perform()

    yield driver

    driver.quit()


def submit_code(driver, code_to_insert):
    div = driver.find_element(By.XPATH, "/html/body/div[2]/div[2]/div[2]/section/div/div/div[1]/div[2]/div[1]/div[4]")
    div.click()

    actions = ActionChains(driver)
    actions.send_keys(code_to_insert)
    actions.perform()

    submit_button = driver.find_element(By.XPATH, "/html/body/div[2]/div[2]/div[2]/button")
    submit_button.click()


def test_user_code_submit(setup_browser):
    driver = setup_browser

    code_to_insert = "def sum_numbers(a,b): return a + b"
    submit_code(driver, code_to_insert)

    time.sleep(2)

    output_pre = driver.find_element(By.CSS_SELECTOR, ".TaskCompiler_outputContainer__Kze6f pre")
    output_text = output_pre.text

    assert output_text == "All tests passed!", f"Expected 'All tests passed!', but got '{output_text}'"


def test_user_code_submit_false(setup_browser):
    driver = setup_browser

    code_to_insert = "def sum_numbers(n): return n"
    submit_code(driver, code_to_insert)

    time.sleep(2)

    output_pre = driver.find_element(By.CSS_SELECTOR, ".TaskCompiler_outputContainer__Kze6f pre")
    output_text = output_pre.text

    assert output_text == (
        "Test failed. Please check your code.\n"
        "Type error: sum_numbers() takes 1 positional argument but 2 were given"
    ), f"Expected 'Test failed. Please check your code.\nType error: sum_numbers() takes 1 positional argument but 2 were given', but got '{output_text}'"
