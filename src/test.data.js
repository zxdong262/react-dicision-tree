module.exports = exports.default = {
  "label": "Credit_card_debt",
  "children": [
    {
      "label": "Y",
      "splitType": ">",
      "value": 10.5
    },
    {
      "label": "debt_ratio",
      "splitType": "≤",
      "value": 10.5,
      "children": [
        {
          "label": "Y",
          "splitType": ">",
          "value": 34
        },
        {
          "label": "other_debt",
          "splitType": "≤",
          "value": 34,
          "children": [
            {
              "label": "Y",
              "splitType": ">",
              "value": 19.5
            },
            {
              "label": "debt_ratio",
              "splitType": "≤",
              "value": 19.5,
              "children": [
                {
                  "label": "seniority",
                  "splitType": ">",
                  "value": 25.5,
                  "children": [
                    {
                      "label": "N",
                      "splitType": ">",
                      "value": 19.5
                    },
                    {
                      "label": "seniority",
                      "splitType": "≤",
                      "value": 19.5,
                      "children": [
                        {
                          "label": "address_year",
                          "splitType": ">",
                          "value": 5,
                          "children": [
                            {
                              "label": "Y",
                              "splitType": ">",
                              "value": 9
                            },
                            {
                              "label": "address_year",
                              "splitType": "≤",
                              "value": 9,
                              "children": [
                                {
                                  "label": "N",
                                  "splitType": ">",
                                  "value": 1
                                },
                                {
                                  "label": "Y",
                                  "splitType": "≤",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "label": "Y",
                          "splitType": "≤",
                          "value": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "label": "seniority",
                  "splitType": "≤",
                  "value": 25.5,
                  "children": [
                    {
                      "label": "N",
                      "splitType": ">",
                      "value": 18.5
                    },
                    {
                      "label": "Credit_card_debt",
                      "splitType": "≤",
                      "value": 18.5,
                      "children": [
                        {
                          "label": "Y",
                          "splitType": ">",
                          "value": 7.5
                        },
                        {
                          "label": "Credit_card_debt",
                          "splitType": "≤",
                          "value": 7.5,
                          "children": [
                            {
                              "label": "income",
                              "splitType": ">",
                              "value": 6.5,
                              "children": [
                                {
                                  "label": "N",
                                  "splitType": ">",
                                  "value": 159
                                },
                                {
                                  "label": "Y",
                                  "splitType": "≤",
                                  "value": 159
                                }
                              ]
                            },
                            {
                              "label": "debt_ratio",
                              "splitType": "≤",
                              "value": 6.5,
                              "children": [
                                {
                                  "label": "seniority",
                                  "splitType": ">",
                                  "value": 12.5,
                                  "children": [
                                    {
                                      "label": "N",
                                      "splitType": ">",
                                      "value": 16.5
                                    },
                                    {
                                      "label": "address_year",
                                      "splitType": "≤",
                                      "value": 16.5,
                                      "children": [
                                        {
                                          "label": "N",
                                          "splitType": ">",
                                          "value": 22
                                        },
                                        {
                                          "label": "address_year",
                                          "splitType": "≤",
                                          "value": 22,
                                          "children": [
                                            {
                                              "label": "Y",
                                              "splitType": ">",
                                              "value": 20.5
                                            },
                                            {
                                              "label": "address_year",
                                              "splitType": "≤",
                                              "value": 20.5,
                                              "children": [
                                                {
                                                  "label": "N",
                                                  "splitType": ">",
                                                  "value": 19.5
                                                },
                                                {
                                                  "label": "income",
                                                  "splitType": "≤",
                                                  "value": 19.5,
                                                  "children": [
                                                    {
                                                      "label": "N",
                                                      "splitType": ">",
                                                      "value": 112.5
                                                    },
                                                    {
                                                      "label": "income",
                                                      "splitType": "≤",
                                                      "value": 112.5,
                                                      "children": [
                                                        {
                                                          "label": "Y",
                                                          "splitType": ">",
                                                          "value": 100
                                                        },
                                                        {
                                                          "label": "income",
                                                          "splitType": "≤",
                                                          "value": 100,
                                                          "children": [
                                                            {
                                                              "label": "N",
                                                              "splitType": ">",
                                                              "value": 78
                                                            },
                                                            {
                                                              "label": "income",
                                                              "splitType": "≤",
                                                              "value": 78,
                                                              "children": [
                                                                {
                                                                  "label": "Y",
                                                                  "splitType": ">",
                                                                  "value": 69
                                                                },
                                                                {
                                                                  "label": "other_debt",
                                                                  "splitType": "≤",
                                                                  "value": 69,
                                                                  "children": [
                                                                    {
                                                                      "label": "N",
                                                                      "splitType": ">",
                                                                      "value": 8.5
                                                                    },
                                                                    {
                                                                      "label": "income",
                                                                      "splitType": "≤",
                                                                      "value": 8.5,
                                                                      "children": [
                                                                        {
                                                                          "label": "Y",
                                                                          "splitType": ">",
                                                                          "value": 67.5
                                                                        },
                                                                        {
                                                                          "label": "income",
                                                                          "splitType": "≤",
                                                                          "value": 67.5,
                                                                          "children": [
                                                                            {
                                                                              "label": "N",
                                                                              "splitType": ">",
                                                                              "value": 65
                                                                            },
                                                                            {
                                                                              "label": "Y",
                                                                              "splitType": "≤",
                                                                              "value": 65
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "label": "income",
                                  "splitType": "≤",
                                  "value": 12.5,
                                  "children": [
                                    {
                                      "label": "seniority",
                                      "splitType": ">",
                                      "value": 14.5,
                                      "children": [
                                        {
                                          "label": "seniority",
                                          "splitType": ">",
                                          "value": 3.5,
                                          "children": [
                                            {
                                              "label": "N",
                                              "splitType": ">",
                                              "value": 14.5
                                            },
                                            {
                                              "label": "Credit_card_debt",
                                              "splitType": "≤",
                                              "value": 14.5,
                                              "children": [
                                                {
                                                  "label": "seniority",
                                                  "splitType": ">",
                                                  "value": 2.5,
                                                  "children": [
                                                    {
                                                      "label": "N",
                                                      "splitType": ">",
                                                      "value": 10.5
                                                    },
                                                    {
                                                      "label": "education",
                                                      "splitType": "≤",
                                                      "value": 10.5,
                                                      "children": [
                                                        {
                                                          "label": "N",
                                                          "splitType": ">",
                                                          "value": 4
                                                        },
                                                        {
                                                          "label": "Y",
                                                          "splitType": "≤",
                                                          "value": 4
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  "label": "education",
                                                  "splitType": "≤",
                                                  "value": 2.5,
                                                  "children": [
                                                    {
                                                      "label": "address_year",
                                                      "splitType": ">",
                                                      "value": 4.5,
                                                      "children": [
                                                        {
                                                          "label": "N",
                                                          "splitType": ">",
                                                          "value": 6
                                                        },
                                                        {
                                                          "label": "Y",
                                                          "splitType": "≤",
                                                          "value": 6
                                                        }
                                                      ]
                                                    },
                                                    {
                                                      "label": "income",
                                                      "splitType": "≤",
                                                      "value": 4.5,
                                                      "children": [
                                                        {
                                                          "label": "education",
                                                          "splitType": ">",
                                                          "value": 85.5,
                                                          "children": [
                                                            {
                                                              "label": "Y",
                                                              "splitType": ">",
                                                              "value": 2.5
                                                            },
                                                            {
                                                              "label": "N",
                                                              "splitType": "≤",
                                                              "value": 2.5
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          "label": "debt_ratio",
                                                          "splitType": "≤",
                                                          "value": 85.5,
                                                          "children": [
                                                            {
                                                              "label": "education",
                                                              "splitType": ">",
                                                              "value": 1.5,
                                                              "children": [
                                                                {
                                                                  "label": "N",
                                                                  "splitType": ">",
                                                                  "value": 3.5
                                                                },
                                                                {
                                                                  "label": "income",
                                                                  "splitType": "≤",
                                                                  "value": 3.5,
                                                                  "children": [
                                                                    {
                                                                      "label": "seniority",
                                                                      "splitType": ">",
                                                                      "value": 26.5,
                                                                      "children": [
                                                                        {
                                                                          "label": "income",
                                                                          "splitType": ">",
                                                                          "value": 4.5,
                                                                          "children": [
                                                                            {
                                                                              "label": "N",
                                                                              "splitType": ">",
                                                                              "value": 31.5
                                                                            },
                                                                            {
                                                                              "label": "N",
                                                                              "splitType": "≤",
                                                                              "value": 31.5
                                                                            }
                                                                          ]
                                                                        },
                                                                        {
                                                                          "label": "income",
                                                                          "splitType": "≤",
                                                                          "value": 4.5,
                                                                          "children": [
                                                                            {
                                                                              "label": "N",
                                                                              "splitType": ">",
                                                                              "value": 27.5
                                                                            },
                                                                            {
                                                                              "label": "Y",
                                                                              "splitType": "≤",
                                                                              "value": 27.5
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    },
                                                                    {
                                                                      "label": "income",
                                                                      "splitType": "≤",
                                                                      "value": 26.5,
                                                                      "children": [
                                                                        {
                                                                          "label": "N",
                                                                          "splitType": ">",
                                                                          "value": 18.5
                                                                        },
                                                                        {
                                                                          "label": "other_debt",
                                                                          "splitType": "≤",
                                                                          "value": 18.5,
                                                                          "children": [
                                                                            {
                                                                              "label": "N",
                                                                              "splitType": ">",
                                                                              "value": 0.5
                                                                            },
                                                                            {
                                                                              "label": "Y",
                                                                              "splitType": "≤",
                                                                              "value": 0.5
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            },
                                                            {
                                                              "label": "N",
                                                              "splitType": "≤",
                                                              "value": 1.5
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "label": "income",
                                          "splitType": "≤",
                                          "value": 3.5,
                                          "children": [
                                            {
                                              "label": "Y",
                                              "splitType": ">",
                                              "value": 67
                                            },
                                            {
                                              "label": "other_debt",
                                              "splitType": "≤",
                                              "value": 67,
                                              "children": [
                                                {
                                                  "label": "Y",
                                                  "splitType": ">",
                                                  "value": 4.5
                                                },
                                                {
                                                  "label": "address_year",
                                                  "splitType": "≤",
                                                  "value": 4.5,
                                                  "children": [
                                                    {
                                                      "label": "N",
                                                      "splitType": ">",
                                                      "value": 13.5
                                                    },
                                                    {
                                                      "label": "income",
                                                      "splitType": "≤",
                                                      "value": 13.5,
                                                      "children": [
                                                        {
                                                          "label": "N",
                                                          "splitType": ">",
                                                          "value": 57
                                                        },
                                                        {
                                                          "label": "income",
                                                          "splitType": "≤",
                                                          "value": 57,
                                                          "children": [
                                                            {
                                                              "label": "Y",
                                                              "splitType": ">",
                                                              "value": 48.5
                                                            },
                                                            {
                                                              "label": "income",
                                                              "splitType": "≤",
                                                              "value": 48.5,
                                                              "children": [
                                                                {
                                                                  "label": "N",
                                                                  "splitType": ">",
                                                                  "value": 44.5
                                                                },
                                                                {
                                                                  "label": "income",
                                                                  "splitType": "≤",
                                                                  "value": 44.5,
                                                                  "children": [
                                                                    {
                                                                      "label": "income",
                                                                      "splitType": ">",
                                                                      "value": 15.5,
                                                                      "children": [
                                                                        {
                                                                          "label": "seniority",
                                                                          "splitType": ">",
                                                                          "value": 39.5,
                                                                          "children": [
                                                                            {
                                                                              "label": "Y",
                                                                              "splitType": ">",
                                                                              "value": 1.5
                                                                            },
                                                                            {
                                                                              "label": "Y",
                                                                              "splitType": "≤",
                                                                              "value": 1.5
                                                                            }
                                                                          ]
                                                                        },
                                                                        {
                                                                          "label": "income",
                                                                          "splitType": "≤",
                                                                          "value": 39.5,
                                                                          "children": [
                                                                            {
                                                                              "label": "N",
                                                                              "splitType": ">",
                                                                              "value": 35.5
                                                                            },
                                                                            {
                                                                              "label": "N",
                                                                              "splitType": "≤",
                                                                              "value": 35.5
                                                                            }
                                                                          ]
                                                                        }
                                                                      ]
                                                                    },
                                                                    {
                                                                      "label": "debt_ratio",
                                                                      "splitType": "≤",
                                                                      "value": 15.5,
                                                                      "children": [
                                                                        {
                                                                          "label": "Y",
                                                                          "splitType": ">",
                                                                          "value": 6
                                                                        },
                                                                        {
                                                                          "label": "N",
                                                                          "splitType": "≤",
                                                                          "value": 6
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "label": "debt_ratio",
                                      "splitType": "≤",
                                      "value": 14.5,
                                      "children": [
                                        {
                                          "label": "N",
                                          "splitType": ">",
                                          "value": 10.5
                                        },
                                        {
                                          "label": "Y",
                                          "splitType": "≤",
                                          "value": 10.5
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
