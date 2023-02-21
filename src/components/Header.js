import { useState } from "react";
import TestCase from "./TestCase";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = (props) => {
  const languages = ["java", "javascript", "mysql", "python"];
  const themes = ["Dark Mode", "Light Mode", "Blue Tone"];
  return (
    <div className="bg-neutral-200 text-black dark:bg-zinc-900 dark:text-gray-200 flow-root items-center">
      <div className="float-left ml-4 my-4 font-sans text-2xl font-bold">
        Unison Live Code Editor
      </div>
      {/* <button className="float-right mr-4 my-6">
                <RxHamburgerMenu size={25} />
            </button> */}
      <div className="float-right mr-4 my-6">
        <Menu as="div" className="relative inline-block">
          <div>
            <Menu.Button>
              <RxHamburgerMenu size={25} />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button>
                      <div
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                        onClick={() => {
                          props.setEditorValue(
                            props.placeholders[props.currentLanguage]
                          );
                        }}
                      >
                        Reset Code
                      </div>
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {/* Copied and pasted: Causes scroll on window*/}
      <div className="float-right mr-16 my-4">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              {props.currentLanguage}
              <BsChevronDown
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {languages.map((language) => {
                  return (
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => {
                            const arr = props.languageValue;
                            props.setLanguageValue(arr);
                            arr[props.currentLanguage] = props.editorValue;
                            props.setCurrentLanguage(language);
                            props.setEditorValue(props.languageValue[language]);
                          }}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {language}
                        </div>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="float-right mr-8 my-4">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              {props.editorTheme}
              <BsChevronDown
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {themes.map((theme) => {
                  return (
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => {
                            let themeDict = {
                              "Dark Mode": "dark",
                              "Light Mode": "light",
                              "Blue Tone": "blue",
                            };
                            props.setTheme(themeDict[theme]);
                            props.setEditorTheme(theme);
                          }}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {theme}
                        </div>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
