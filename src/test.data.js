const data = {
  "result": {
    "ioObjects": [{
      "dataType": "tree_model",
      "root": {
        "label": null,
        "children": [{
          "condition": {
            "splitType": "greater",
            "attributeName": "Credit_card_debt",
            "value": 10.5
          },
          "child": {
            "label": "Y",
            "children": []
          }
        }, {
          "condition": {
            "splitType": "less_equals",
            "attributeName": "Credit_card_debt",
            "value": 10.5
          },
          "child": {
            "label": null,
            "children": [{
              "condition": {
                "splitType": "greater",
                "attributeName": "debt_ratio",
                "value": 34
              },
              "child": {
                "label": "Y",
                "children": []
              }
            }, {
              "condition": {
                "splitType": "less_equals",
                "attributeName": "debt_ratio",
                "value": 34
              },
              "child": {
                "label": null,
                "children": [{
                  "condition": {
                    "splitType": "greater",
                    "attributeName": "other_debt",
                    "value": 19.5
                  },
                  "child": {
                    "label": "Y",
                    "children": []
                  }
                }, {
                  "condition": {
                    "splitType": "less_equals",
                    "attributeName": "other_debt",
                    "value": 19.5
                  },
                  "child": {
                    "label": null,
                    "children": [{
                      "condition": {
                        "splitType": "greater",
                        "attributeName": "debt_ratio",
                        "value": 25.5
                      },
                      "child": {
                        "label": null,
                        "children": [{
                          "condition": {
                            "splitType": "greater",
                            "attributeName": "seniority",
                            "value": 19.5
                          },
                          "child": {
                            "label": "N",
                            "children": []
                          }
                        }, {
                          "condition": {
                            "splitType": "less_equals",
                            "attributeName": "seniority",
                            "value": 19.5
                          },
                          "child": {
                            "label": null,
                            "children": [{
                              "condition": {
                                "splitType": "greater",
                                "attributeName": "seniority",
                                "value": 5
                              },
                              "child": {
                                "label": null,
                                "children": [{
                                  "condition": {
                                    "splitType": "greater",
                                    "attributeName": "address_year",
                                    "value": 9
                                  },
                                  "child": {
                                    "label": "Y",
                                    "children": []
                                  }
                                }, {
                                  "condition": {
                                    "splitType": "less_equals",
                                    "attributeName": "address_year",
                                    "value": 9
                                  },
                                  "child": {
                                    "label": null,
                                    "children": [{
                                      "condition": {
                                        "splitType": "greater",
                                        "attributeName": "address_year",
                                        "value": 1
                                      },
                                      "child": {
                                        "label": "N",
                                        "children": []
                                      }
                                    }, {
                                      "condition": {
                                        "splitType": "less_equals",
                                        "attributeName": "address_year",
                                        "value": 1
                                      },
                                      "child": {
                                        "label": "Y",
                                        "children": []
                                      }
                                    }]
                                  }
                                }]
                              }
                            }, {
                              "condition": {
                                "splitType": "less_equals",
                                "attributeName": "seniority",
                                "value": 5
                              },
                              "child": {
                                "label": "Y",
                                "children": []
                              }
                            }]
                          }
                        }]
                      }
                    }, {
                      "condition": {
                        "splitType": "less_equals",
                        "attributeName": "debt_ratio",
                        "value": 25.5
                      },
                      "child": {
                        "label": null,
                        "children": [{
                          "condition": {
                            "splitType": "greater",
                            "attributeName": "seniority",
                            "value": 18.5
                          },
                          "child": {
                            "label": "N",
                            "children": []
                          }
                        }, {
                          "condition": {
                            "splitType": "less_equals",
                            "attributeName": "seniority",
                            "value": 18.5
                          },
                          "child": {
                            "label": null,
                            "children": [{
                              "condition": {
                                "splitType": "greater",
                                "attributeName": "Credit_card_debt",
                                "value": 7.5
                              },
                              "child": {
                                "label": "Y",
                                "children": []
                              }
                            }, {
                              "condition": {
                                "splitType": "less_equals",
                                "attributeName": "Credit_card_debt",
                                "value": 7.5
                              },
                              "child": {
                                "label": null,
                                "children": [{
                                  "condition": {
                                    "splitType": "greater",
                                    "attributeName": "Credit_card_debt",
                                    "value": 6.5
                                  },
                                  "child": {
                                    "label": null,
                                    "children": [{
                                      "condition": {
                                        "splitType": "greater",
                                        "attributeName": "income",
                                        "value": 159
                                      },
                                      "child": {
                                        "label": "N",
                                        "children": []
                                      }
                                    }, {
                                      "condition": {
                                        "splitType": "less_equals",
                                        "attributeName": "income",
                                        "value": 159
                                      },
                                      "child": {
                                        "label": "Y",
                                        "children": []
                                      }
                                    }]
                                  }
                                }, {
                                  "condition": {
                                    "splitType": "less_equals",
                                    "attributeName": "Credit_card_debt",
                                    "value": 6.5
                                  },
                                  "child": {
                                    "label": null,
                                    "children": [{
                                      "condition": {
                                        "splitType": "greater",
                                        "attributeName": "debt_ratio",
                                        "value": 12.5
                                      },
                                      "child": {
                                        "label": null,
                                        "children": [{
                                          "condition": {
                                            "splitType": "greater",
                                            "attributeName": "seniority",
                                            "value": 16.5
                                          },
                                          "child": {
                                            "label": "N",
                                            "children": []
                                          }
                                        }, {
                                          "condition": {
                                            "splitType": "less_equals",
                                            "attributeName": "seniority",
                                            "value": 16.5
                                          },
                                          "child": {
                                            "label": null,
                                            "children": [{
                                              "condition": {
                                                "splitType": "greater",
                                                "attributeName": "address_year",
                                                "value": 22
                                              },
                                              "child": {
                                                "label": "N",
                                                "children": []
                                              }
                                            }, {
                                              "condition": {
                                                "splitType": "less_equals",
                                                "attributeName": "address_year",
                                                "value": 22
                                              },
                                              "child": {
                                                "label": null,
                                                "children": [{
                                                  "condition": {
                                                    "splitType": "greater",
                                                    "attributeName": "address_year",
                                                    "value": 20.5
                                                  },
                                                  "child": {
                                                    "label": "Y",
                                                    "children": []
                                                  }
                                                }, {
                                                  "condition": {
                                                    "splitType": "less_equals",
                                                    "attributeName": "address_year",
                                                    "value": 20.5
                                                  },
                                                  "child": {
                                                    "label": null,
                                                    "children": [{
                                                      "condition": {
                                                        "splitType": "greater",
                                                        "attributeName": "address_year",
                                                        "value": 19.5
                                                      },
                                                      "child": {
                                                        "label": "N",
                                                        "children": []
                                                      }
                                                    }, {
                                                      "condition": {
                                                        "splitType": "less_equals",
                                                        "attributeName": "address_year",
                                                        "value": 19.5
                                                      },
                                                      "child": {
                                                        "label": null,
                                                        "children": [{
                                                          "condition": {
                                                            "splitType": "greater",
                                                            "attributeName": "income",
                                                            "value": 112.5
                                                          },
                                                          "child": {
                                                            "label": "N",
                                                            "children": []
                                                          }
                                                        }, {
                                                          "condition": {
                                                            "splitType": "less_equals",
                                                            "attributeName": "income",
                                                            "value": 112.5
                                                          },
                                                          "child": {
                                                            "label": null,
                                                            "children": [{
                                                              "condition": {
                                                                "splitType": "greater",
                                                                "attributeName": "income",
                                                                "value": 100
                                                              },
                                                              "child": {
                                                                "label": "Y",
                                                                "children": []
                                                              }
                                                            }, {
                                                              "condition": {
                                                                "splitType": "less_equals",
                                                                "attributeName": "income",
                                                                "value": 100
                                                              },
                                                              "child": {
                                                                "label": null,
                                                                "children": [{
                                                                  "condition": {
                                                                    "splitType": "greater",
                                                                    "attributeName": "income",
                                                                    "value": 78
                                                                  },
                                                                  "child": {
                                                                    "label": "N",
                                                                    "children": []
                                                                  }
                                                                }, {
                                                                  "condition": {
                                                                    "splitType": "less_equals",
                                                                    "attributeName": "income",
                                                                    "value": 78
                                                                  },
                                                                  "child": {
                                                                    "label": null,
                                                                    "children": [{
                                                                      "condition": {
                                                                        "splitType": "greater",
                                                                        "attributeName": "income",
                                                                        "value": 69
                                                                      },
                                                                      "child": {
                                                                        "label": "Y",
                                                                        "children": []
                                                                      }
                                                                    }, {
                                                                      "condition": {
                                                                        "splitType": "less_equals",
                                                                        "attributeName": "income",
                                                                        "value": 69
                                                                      },
                                                                      "child": {
                                                                        "label": null,
                                                                        "children": [{
                                                                          "condition": {
                                                                            "splitType": "greater",
                                                                            "attributeName": "other_debt",
                                                                            "value": 8.5
                                                                          },
                                                                          "child": {
                                                                            "label": "N",
                                                                            "children": []
                                                                          }
                                                                        }, {
                                                                          "condition": {
                                                                            "splitType": "less_equals",
                                                                            "attributeName": "other_debt",
                                                                            "value": 8.5
                                                                          },
                                                                          "child": {
                                                                            "label": null,
                                                                            "children": [{
                                                                              "condition": {
                                                                                "splitType": "greater",
                                                                                "attributeName": "income",
                                                                                "value": 67.5
                                                                              },
                                                                              "child": {
                                                                                "label": "Y",
                                                                                "children": []
                                                                              }
                                                                            }, {
                                                                              "condition": {
                                                                                "splitType": "less_equals",
                                                                                "attributeName": "income",
                                                                                "value": 67.5
                                                                              },
                                                                              "child": {
                                                                                "label": null,
                                                                                "children": [{
                                                                                  "condition": {
                                                                                    "splitType": "greater",
                                                                                    "attributeName": "income",
                                                                                    "value": 65
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "N",
                                                                                    "children": []
                                                                                  }
                                                                                }, {
                                                                                  "condition": {
                                                                                    "splitType": "less_equals",
                                                                                    "attributeName": "income",
                                                                                    "value": 65
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "Y",
                                                                                    "children": []
                                                                                  }
                                                                                }]
                                                                              }
                                                                            }]
                                                                          }
                                                                        }]
                                                                      }
                                                                    }]
                                                                  }
                                                                }]
                                                              }
                                                            }]
                                                          }
                                                        }]
                                                      }
                                                    }]
                                                  }
                                                }]
                                              }
                                            }]
                                          }
                                        }]
                                      }
                                    }, {
                                      "condition": {
                                        "splitType": "less_equals",
                                        "attributeName": "debt_ratio",
                                        "value": 12.5
                                      },
                                      "child": {
                                        "label": null,
                                        "children": [{
                                          "condition": {
                                            "splitType": "greater",
                                            "attributeName": "income",
                                            "value": 14.5
                                          },
                                          "child": {
                                            "label": null,
                                            "children": [{
                                              "condition": {
                                                "splitType": "greater",
                                                "attributeName": "seniority",
                                                "value": 3.5
                                              },
                                              "child": {
                                                "label": null,
                                                "children": [{
                                                  "condition": {
                                                    "splitType": "greater",
                                                    "attributeName": "seniority",
                                                    "value": 14.5
                                                  },
                                                  "child": {
                                                    "label": "N",
                                                    "children": []
                                                  }
                                                }, {
                                                  "condition": {
                                                    "splitType": "less_equals",
                                                    "attributeName": "seniority",
                                                    "value": 14.5
                                                  },
                                                  "child": {
                                                    "label": null,
                                                    "children": [{
                                                      "condition": {
                                                        "splitType": "greater",
                                                        "attributeName": "Credit_card_debt",
                                                        "value": 2.5
                                                      },
                                                      "child": {
                                                        "label": null,
                                                        "children": [{
                                                          "condition": {
                                                            "splitType": "greater",
                                                            "attributeName": "seniority",
                                                            "value": 10.5
                                                          },
                                                          "child": {
                                                            "label": "N",
                                                            "children": []
                                                          }
                                                        }, {
                                                          "condition": {
                                                            "splitType": "less_equals",
                                                            "attributeName": "seniority",
                                                            "value": 10.5
                                                          },
                                                          "child": {
                                                            "label": null,
                                                            "children": [{
                                                              "condition": {
                                                                "splitType": "greater",
                                                                "attributeName": "education",
                                                                "value": 4
                                                              },
                                                              "child": {
                                                                "label": "N",
                                                                "children": []
                                                              }
                                                            }, {
                                                              "condition": {
                                                                "splitType": "less_equals",
                                                                "attributeName": "education",
                                                                "value": 4
                                                              },
                                                              "child": {
                                                                "label": "Y",
                                                                "children": []
                                                              }
                                                            }]
                                                          }
                                                        }]
                                                      }
                                                    }, {
                                                      "condition": {
                                                        "splitType": "less_equals",
                                                        "attributeName": "Credit_card_debt",
                                                        "value": 2.5
                                                      },
                                                      "child": {
                                                        "label": null,
                                                        "children": [{
                                                          "condition": {
                                                            "splitType": "greater",
                                                            "attributeName": "education",
                                                            "value": 4.5
                                                          },
                                                          "child": {
                                                            "label": null,
                                                            "children": [{
                                                              "condition": {
                                                                "splitType": "greater",
                                                                "attributeName": "address_year",
                                                                "value": 6
                                                              },
                                                              "child": {
                                                                "label": "N",
                                                                "children": []
                                                              }
                                                            }, {
                                                              "condition": {
                                                                "splitType": "less_equals",
                                                                "attributeName": "address_year",
                                                                "value": 6
                                                              },
                                                              "child": {
                                                                "label": "Y",
                                                                "children": []
                                                              }
                                                            }]
                                                          }
                                                        }, {
                                                          "condition": {
                                                            "splitType": "less_equals",
                                                            "attributeName": "education",
                                                            "value": 4.5
                                                          },
                                                          "child": {
                                                            "label": null,
                                                            "children": [{
                                                              "condition": {
                                                                "splitType": "greater",
                                                                "attributeName": "income",
                                                                "value": 85.5
                                                              },
                                                              "child": {
                                                                "label": null,
                                                                "children": [{
                                                                  "condition": {
                                                                    "splitType": "greater",
                                                                    "attributeName": "education",
                                                                    "value": 2.5
                                                                  },
                                                                  "child": {
                                                                    "label": "Y",
                                                                    "children": []
                                                                  }
                                                                }, {
                                                                  "condition": {
                                                                    "splitType": "less_equals",
                                                                    "attributeName": "education",
                                                                    "value": 2.5
                                                                  },
                                                                  "child": {
                                                                    "label": "N",
                                                                    "children": []
                                                                  }
                                                                }]
                                                              }
                                                            }, {
                                                              "condition": {
                                                                "splitType": "less_equals",
                                                                "attributeName": "income",
                                                                "value": 85.5
                                                              },
                                                              "child": {
                                                                "label": null,
                                                                "children": [{
                                                                  "condition": {
                                                                    "splitType": "greater",
                                                                    "attributeName": "debt_ratio",
                                                                    "value": 1.5
                                                                  },
                                                                  "child": {
                                                                    "label": null,
                                                                    "children": [{
                                                                      "condition": {
                                                                        "splitType": "greater",
                                                                        "attributeName": "education",
                                                                        "value": 3.5
                                                                      },
                                                                      "child": {
                                                                        "label": "N",
                                                                        "children": []
                                                                      }
                                                                    }, {
                                                                      "condition": {
                                                                        "splitType": "less_equals",
                                                                        "attributeName": "education",
                                                                        "value": 3.5
                                                                      },
                                                                      "child": {
                                                                        "label": null,
                                                                        "children": [{
                                                                          "condition": {
                                                                            "splitType": "greater",
                                                                            "attributeName": "income",
                                                                            "value": 26.5
                                                                          },
                                                                          "child": {
                                                                            "label": null,
                                                                            "children": [{
                                                                              "condition": {
                                                                                "splitType": "greater",
                                                                                "attributeName": "seniority",
                                                                                "value": 4.5
                                                                              },
                                                                              "child": {
                                                                                "label": null,
                                                                                "children": [{
                                                                                  "condition": {
                                                                                    "splitType": "greater",
                                                                                    "attributeName": "income",
                                                                                    "value": 31.5
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "N",
                                                                                    "children": []
                                                                                  }
                                                                                }, {
                                                                                  "condition": {
                                                                                    "splitType": "less_equals",
                                                                                    "attributeName": "income",
                                                                                    "value": 31.5
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "N",
                                                                                    "children": []
                                                                                  }
                                                                                }]
                                                                              }
                                                                            }, {
                                                                              "condition": {
                                                                                "splitType": "less_equals",
                                                                                "attributeName": "seniority",
                                                                                "value": 4.5
                                                                              },
                                                                              "child": {
                                                                                "label": null,
                                                                                "children": [{
                                                                                  "condition": {
                                                                                    "splitType": "greater",
                                                                                    "attributeName": "income",
                                                                                    "value": 27.5
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "N",
                                                                                    "children": []
                                                                                  }
                                                                                }, {
                                                                                  "condition": {
                                                                                    "splitType": "less_equals",
                                                                                    "attributeName": "income",
                                                                                    "value": 27.5
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "Y",
                                                                                    "children": []
                                                                                  }
                                                                                }]
                                                                              }
                                                                            }]
                                                                          }
                                                                        }, {
                                                                          "condition": {
                                                                            "splitType": "less_equals",
                                                                            "attributeName": "income",
                                                                            "value": 26.5
                                                                          },
                                                                          "child": {
                                                                            "label": null,
                                                                            "children": [{
                                                                              "condition": {
                                                                                "splitType": "greater",
                                                                                "attributeName": "income",
                                                                                "value": 18.5
                                                                              },
                                                                              "child": {
                                                                                "label": "N",
                                                                                "children": []
                                                                              }
                                                                            }, {
                                                                              "condition": {
                                                                                "splitType": "less_equals",
                                                                                "attributeName": "income",
                                                                                "value": 18.5
                                                                              },
                                                                              "child": {
                                                                                "label": null,
                                                                                "children": [{
                                                                                  "condition": {
                                                                                    "splitType": "greater",
                                                                                    "attributeName": "other_debt",
                                                                                    "value": 0.5
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "N",
                                                                                    "children": []
                                                                                  }
                                                                                }, {
                                                                                  "condition": {
                                                                                    "splitType": "less_equals",
                                                                                    "attributeName": "other_debt",
                                                                                    "value": 0.5
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "Y",
                                                                                    "children": []
                                                                                  }
                                                                                }]
                                                                              }
                                                                            }]
                                                                          }
                                                                        }]
                                                                      }
                                                                    }]
                                                                  }
                                                                }, {
                                                                  "condition": {
                                                                    "splitType": "less_equals",
                                                                    "attributeName": "debt_ratio",
                                                                    "value": 1.5
                                                                  },
                                                                  "child": {
                                                                    "label": "N",
                                                                    "children": []
                                                                  }
                                                                }]
                                                              }
                                                            }]
                                                          }
                                                        }]
                                                      }
                                                    }]
                                                  }
                                                }]
                                              }
                                            }, {
                                              "condition": {
                                                "splitType": "less_equals",
                                                "attributeName": "seniority",
                                                "value": 3.5
                                              },
                                              "child": {
                                                "label": null,
                                                "children": [{
                                                  "condition": {
                                                    "splitType": "greater",
                                                    "attributeName": "income",
                                                    "value": 67
                                                  },
                                                  "child": {
                                                    "label": "Y",
                                                    "children": []
                                                  }
                                                }, {
                                                  "condition": {
                                                    "splitType": "less_equals",
                                                    "attributeName": "income",
                                                    "value": 67
                                                  },
                                                  "child": {
                                                    "label": null,
                                                    "children": [{
                                                      "condition": {
                                                        "splitType": "greater",
                                                        "attributeName": "other_debt",
                                                        "value": 4.5
                                                      },
                                                      "child": {
                                                        "label": "Y",
                                                        "children": []
                                                      }
                                                    }, {
                                                      "condition": {
                                                        "splitType": "less_equals",
                                                        "attributeName": "other_debt",
                                                        "value": 4.5
                                                      },
                                                      "child": {
                                                        "label": null,
                                                        "children": [{
                                                          "condition": {
                                                            "splitType": "greater",
                                                            "attributeName": "address_year",
                                                            "value": 13.5
                                                          },
                                                          "child": {
                                                            "label": "N",
                                                            "children": []
                                                          }
                                                        }, {
                                                          "condition": {
                                                            "splitType": "less_equals",
                                                            "attributeName": "address_year",
                                                            "value": 13.5
                                                          },
                                                          "child": {
                                                            "label": null,
                                                            "children": [{
                                                              "condition": {
                                                                "splitType": "greater",
                                                                "attributeName": "income",
                                                                "value": 57
                                                              },
                                                              "child": {
                                                                "label": "N",
                                                                "children": []
                                                              }
                                                            }, {
                                                              "condition": {
                                                                "splitType": "less_equals",
                                                                "attributeName": "income",
                                                                "value": 57
                                                              },
                                                              "child": {
                                                                "label": null,
                                                                "children": [{
                                                                  "condition": {
                                                                    "splitType": "greater",
                                                                    "attributeName": "income",
                                                                    "value": 48.5
                                                                  },
                                                                  "child": {
                                                                    "label": "Y",
                                                                    "children": []
                                                                  }
                                                                }, {
                                                                  "condition": {
                                                                    "splitType": "less_equals",
                                                                    "attributeName": "income",
                                                                    "value": 48.5
                                                                  },
                                                                  "child": {
                                                                    "label": null,
                                                                    "children": [{
                                                                      "condition": {
                                                                        "splitType": "greater",
                                                                        "attributeName": "income",
                                                                        "value": 44.5
                                                                      },
                                                                      "child": {
                                                                        "label": "N",
                                                                        "children": []
                                                                      }
                                                                    }, {
                                                                      "condition": {
                                                                        "splitType": "less_equals",
                                                                        "attributeName": "income",
                                                                        "value": 44.5
                                                                      },
                                                                      "child": {
                                                                        "label": null,
                                                                        "children": [{
                                                                          "condition": {
                                                                            "splitType": "greater",
                                                                            "attributeName": "income",
                                                                            "value": 15.5
                                                                          },
                                                                          "child": {
                                                                            "label": null,
                                                                            "children": [{
                                                                              "condition": {
                                                                                "splitType": "greater",
                                                                                "attributeName": "income",
                                                                                "value": 39.5
                                                                              },
                                                                              "child": {
                                                                                "label": null,
                                                                                "children": [{
                                                                                  "condition": {
                                                                                    "splitType": "greater",
                                                                                    "attributeName": "seniority",
                                                                                    "value": 1.5
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "Y",
                                                                                    "children": []
                                                                                  }
                                                                                }, {
                                                                                  "condition": {
                                                                                    "splitType": "less_equals",
                                                                                    "attributeName": "seniority",
                                                                                    "value": 1.5
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "Y",
                                                                                    "children": []
                                                                                  }
                                                                                }]
                                                                              }
                                                                            }, {
                                                                              "condition": {
                                                                                "splitType": "less_equals",
                                                                                "attributeName": "income",
                                                                                "value": 39.5
                                                                              },
                                                                              "child": {
                                                                                "label": null,
                                                                                "children": [{
                                                                                  "condition": {
                                                                                    "splitType": "greater",
                                                                                    "attributeName": "income",
                                                                                    "value": 35.5
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "N",
                                                                                    "children": []
                                                                                  }
                                                                                }, {
                                                                                  "condition": {
                                                                                    "splitType": "less_equals",
                                                                                    "attributeName": "income",
                                                                                    "value": 35.5
                                                                                  },
                                                                                  "child": {
                                                                                    "label": "N",
                                                                                    "children": []
                                                                                  }
                                                                                }]
                                                                              }
                                                                            }]
                                                                          }
                                                                        }, {
                                                                          "condition": {
                                                                            "splitType": "less_equals",
                                                                            "attributeName": "income",
                                                                            "value": 15.5
                                                                          },
                                                                          "child": {
                                                                            "label": null,
                                                                            "children": [{
                                                                              "condition": {
                                                                                "splitType": "greater",
                                                                                "attributeName": "debt_ratio",
                                                                                "value": 6
                                                                              },
                                                                              "child": {
                                                                                "label": "Y",
                                                                                "children": []
                                                                              }
                                                                            }, {
                                                                              "condition": {
                                                                                "splitType": "less_equals",
                                                                                "attributeName": "debt_ratio",
                                                                                "value": 6
                                                                              },
                                                                              "child": {
                                                                                "label": "N",
                                                                                "children": []
                                                                              }
                                                                            }]
                                                                          }
                                                                        }]
                                                                      }
                                                                    }]
                                                                  }
                                                                }]
                                                              }
                                                            }]
                                                          }
                                                        }]
                                                      }
                                                    }]
                                                  }
                                                }]
                                              }
                                            }]
                                          }
                                        }, {
                                          "condition": {
                                            "splitType": "less_equals",
                                            "attributeName": "income",
                                            "value": 14.5
                                          },
                                          "child": {
                                            "label": null,
                                            "children": [{
                                              "condition": {
                                                "splitType": "greater",
                                                "attributeName": "debt_ratio",
                                                "value": 10.5
                                              },
                                              "child": {
                                                "label": "N",
                                                "children": []
                                              }
                                            }, {
                                              "condition": {
                                                "splitType": "less_equals",
                                                "attributeName": "debt_ratio",
                                                "value": 10.5
                                              },
                                              "child": {
                                                "label": "Y",
                                                "children": []
                                              }
                                            }]
                                          }
                                        }]
                                      }
                                    }]
                                  }
                                }]
                              }
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }]
      }
    }]
  },
  "code": 0
}

export default data