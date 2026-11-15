window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "chatwoot-e2e-screenplay",
    "totalScenarios": 30,
    "outcomes": {
      "passed": 30,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 242308,
    "startedAt": "2026-11-15T22:49:12.940Z",
    "finishedAt": "2026-11-15T22:53:15.248Z",
    "testRunner": "Cucumber"
  },
  "scenarios": [
    {
      "name": "[CP-06-01] Crear un contacto con correo y teléfono válidos",
      "category": "[Daniel Ortiz] RF-06 Gestión de contactos",
      "outcome": "SUCCESS",
      "duration": 8222,
      "startedAt": "2026-11-15T22:49:12.940Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
        "line": 12
      },
      "tags": [
        {
          "type": "capability",
          "name": "Daniel"
        },
        {
          "type": "feature",
          "name": "[Daniel Ortiz] RF-06 Gestión de contactos"
        },
        {
          "type": "tag",
          "name": "danielortiz"
        },
        {
          "type": "tag",
          "name": "rf06"
        },
        {
          "type": "tag",
          "name": "cp-06-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 4446,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 4348,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 2286,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:13.023Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 251,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:15.321Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:15.585Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 157,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:15.627Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 1557,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:15.795Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:13.022Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:12.945Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
            "line": 9
          }
        },
        {
          "name": "Cuando ella crea el contacto \"Ana\" \"Prueba\" con un correo y un teléfono nuevos",
          "outcome": "SUCCESS",
          "duration": 2801,
          "children": [
            {
              "name": "Andrea anota el correo y el teléfono",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:49:17.408Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 35,
                "column": 17
              }
            },
            {
              "name": "Andrea crea el contacto Ana Prueba",
              "outcome": "SUCCESS",
              "duration": 2755,
              "children": [
                {
                  "name": "Andrea abre el menú de contactos",
                  "outcome": "SUCCESS",
                  "duration": 2267,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:17.423Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 8,
                    "column": 32
                  }
                },
                {
                  "name": "Andrea llena y guarda el formulario del contacto",
                  "outcome": "SUCCESS",
                  "duration": 444,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:19.711Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 22,
                    "column": 17
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:17.421Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 39,
                "column": 55
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:17.395Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
            "line": 13
          }
        },
        {
          "name": "Entonces existe un solo contacto con ese correo, llamado \"Ana Prueba\" y con el teléfono +57",
          "outcome": "SUCCESS",
          "duration": 833,
          "children": [
            {
              "name": "Andrea ensures that los contactos con el correo ana.1794782957399@chatwoot.test does eventually have property length that does equal 1",
              "outcome": "SUCCESS",
              "duration": 595,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:49:20.228Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 47,
                "column": 12
              }
            },
            {
              "name": "Andrea ensures that el nombre y el teléfono del contacto ana.1794782957399@chatwoot.test does equal { name: \"Ana Prueba\", phone: \"+573002957399\" }",
              "outcome": "SUCCESS",
              "duration": 179,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:49:20.837Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 48,
                "column": 12
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:20.198Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
            "line": 14
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 8222,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 4446,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 4348,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 2286,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:13.023Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 251,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:15.321Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:15.585Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 157,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:15.627Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 1557,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:15.795Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:49:13.022Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:12.945Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
                "line": 9
              }
            },
            {
              "name": "Cuando ella crea el contacto \"Ana\" \"Prueba\" con un correo y un teléfono nuevos",
              "outcome": "SUCCESS",
              "duration": 2801,
              "children": [
                {
                  "name": "Andrea anota el correo y el teléfono",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:17.408Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 35,
                    "column": 17
                  }
                },
                {
                  "name": "Andrea crea el contacto Ana Prueba",
                  "outcome": "SUCCESS",
                  "duration": 2755,
                  "children": [
                    {
                      "name": "Andrea abre el menú de contactos",
                      "outcome": "SUCCESS",
                      "duration": 2267,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:17.423Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 8,
                        "column": 32
                      }
                    },
                    {
                      "name": "Andrea llena y guarda el formulario del contacto",
                      "outcome": "SUCCESS",
                      "duration": 444,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:19.711Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 22,
                        "column": 17
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:49:17.421Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 39,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:17.395Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
                "line": 13
              }
            },
            {
              "name": "Entonces existe un solo contacto con ese correo, llamado \"Ana Prueba\" y con el teléfono +57",
              "outcome": "SUCCESS",
              "duration": 833,
              "children": [
                {
                  "name": "Andrea ensures that los contactos con el correo ana.1794782957399@chatwoot.test does eventually have property length that does equal 1",
                  "outcome": "SUCCESS",
                  "duration": 595,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:20.228Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 47,
                    "column": 12
                  }
                },
                {
                  "name": "Andrea ensures that el nombre y el teléfono del contacto ana.1794782957399@chatwoot.test does equal { name: \"Ana Prueba\", phone: \"+573002957399\" }",
                  "outcome": "SUCCESS",
                  "duration": 179,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:20.837Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 48,
                    "column": 12
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:20.198Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
                "line": 14
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero registrar los datos de los clientes\nPara tener su información de contacto a la mano</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature:12"
    },
    {
      "name": "[CP-06-03] Un correo repetido, aunque cambien las mayúsculas, no se acepta",
      "category": "[Daniel Ortiz] RF-06 Gestión de contactos",
      "outcome": "SUCCESS",
      "duration": 7777,
      "startedAt": "2026-11-15T22:49:21.173Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
        "line": 17
      },
      "tags": [
        {
          "type": "capability",
          "name": "Daniel"
        },
        {
          "type": "feature",
          "name": "[Daniel Ortiz] RF-06 Gestión de contactos"
        },
        {
          "type": "tag",
          "name": "danielortiz"
        },
        {
          "type": "tag",
          "name": "rf06"
        },
        {
          "type": "tag",
          "name": "cp-06-03"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 2726,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2665,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1375,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:21.219Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 52,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:22.613Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:22.678Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 106,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:22.710Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 1038,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:22.832Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:21.219Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:21.174Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
            "line": 9
          }
        },
        {
          "name": "Dado que Andrea ya registró un contacto con un correo nuevo",
          "outcome": "SUCCESS",
          "duration": 169,
          "children": [
            {
              "name": "Andrea prepara el contacto Contacto Original por la API",
              "outcome": "SUCCESS",
              "duration": 155,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:49:23.903Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 53,
                "column": 26
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:23.901Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
            "line": 18
          }
        },
        {
          "name": "Cuando ella intenta crear otro contacto con el mismo correo en mayúsculas",
          "outcome": "SUCCESS",
          "duration": 1626,
          "children": [
            {
              "name": "Andrea crea el contacto Copia QA",
              "outcome": "SUCCESS",
              "duration": 1606,
              "children": [
                {
                  "name": "Andrea abre el menú de contactos",
                  "outcome": "SUCCESS",
                  "duration": 1229,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:24.074Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 8,
                    "column": 32
                  }
                },
                {
                  "name": "Andrea llena y guarda el formulario del contacto",
                  "outcome": "SUCCESS",
                  "duration": 341,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:25.328Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 22,
                    "column": 17
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:24.074Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 57,
                "column": 116
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:24.070Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
            "line": 19
          }
        },
        {
          "name": "Entonces el formulario del contacto sigue abierto",
          "outcome": "SUCCESS",
          "duration": 3098,
          "children": [
            {
              "name": "Andrea waits for 3s",
              "outcome": "SUCCESS",
              "duration": 3013,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:49:25.719Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 61,
                "column": 50
              }
            },
            {
              "name": "Andrea ensures that si el formulario sigue abierto does equal true",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:49:28.747Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 61,
                "column": 82
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:25.697Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
            "line": 20
          }
        },
        {
          "name": "Y sigue existiendo un solo contacto con ese correo",
          "outcome": "SUCCESS",
          "duration": 61,
          "children": [
            {
              "name": "Andrea ensures that los contactos con el correo contacto-1794782963903@chatwoot.test does have property length that does equal 1",
              "outcome": "SUCCESS",
              "duration": 43,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:49:28.801Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 66,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:28.796Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
            "line": 21
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 7777,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2726,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 2665,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1375,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:21.219Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 52,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:22.613Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:22.678Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 106,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:22.710Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 1038,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:22.832Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:49:21.219Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:21.174Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
                "line": 9
              }
            },
            {
              "name": "Dado que Andrea ya registró un contacto con un correo nuevo",
              "outcome": "SUCCESS",
              "duration": 169,
              "children": [
                {
                  "name": "Andrea prepara el contacto Contacto Original por la API",
                  "outcome": "SUCCESS",
                  "duration": 155,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:23.903Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 53,
                    "column": 26
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:23.901Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
                "line": 18
              }
            },
            {
              "name": "Cuando ella intenta crear otro contacto con el mismo correo en mayúsculas",
              "outcome": "SUCCESS",
              "duration": 1626,
              "children": [
                {
                  "name": "Andrea crea el contacto Copia QA",
                  "outcome": "SUCCESS",
                  "duration": 1606,
                  "children": [
                    {
                      "name": "Andrea abre el menú de contactos",
                      "outcome": "SUCCESS",
                      "duration": 1229,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:24.074Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 8,
                        "column": 32
                      }
                    },
                    {
                      "name": "Andrea llena y guarda el formulario del contacto",
                      "outcome": "SUCCESS",
                      "duration": 341,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:25.328Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 22,
                        "column": 17
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:49:24.074Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 57,
                    "column": 116
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:24.070Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
                "line": 19
              }
            },
            {
              "name": "Entonces el formulario del contacto sigue abierto",
              "outcome": "SUCCESS",
              "duration": 3098,
              "children": [
                {
                  "name": "Andrea waits for 3s",
                  "outcome": "SUCCESS",
                  "duration": 3013,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:25.719Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 61,
                    "column": 50
                  }
                },
                {
                  "name": "Andrea ensures that si el formulario sigue abierto does equal true",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:28.747Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 61,
                    "column": 82
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:25.697Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
                "line": 20
              }
            },
            {
              "name": "Y sigue existiendo un solo contacto con ese correo",
              "outcome": "SUCCESS",
              "duration": 61,
              "children": [
                {
                  "name": "Andrea ensures that los contactos con el correo contacto-1794782963903@chatwoot.test does have property length that does equal 1",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:28.801Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 66,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:28.796Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature",
                "line": 21
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero registrar los datos de los clientes\nPara tener su información de contacto a la mano</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf06_contactos.feature:17"
    },
    {
      "name": "[CP-07-01] Importar un CSV con tres contactos válidos",
      "category": "[Daniel Ortiz] RF-07 Importación de contactos desde CSV",
      "outcome": "SUCCESS",
      "duration": 108176,
      "startedAt": "2026-11-15T22:49:28.955Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
        "line": 12
      },
      "tags": [
        {
          "type": "capability",
          "name": "Daniel"
        },
        {
          "type": "feature",
          "name": "[Daniel Ortiz] RF-07 Importación de contactos desde CSV"
        },
        {
          "type": "tag",
          "name": "danielortiz"
        },
        {
          "type": "tag",
          "name": "rf07"
        },
        {
          "type": "tag",
          "name": "cp-07-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 2446,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2364,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1572,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:29.021Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 73,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:30.607Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:30.701Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 87,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:30.731Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 525,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:30.842Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:29.021Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:28.957Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
            "line": 9
          }
        },
        {
          "name": "Cuando ella importa un CSV con 3 contactos nuevos",
          "outcome": "SUCCESS",
          "duration": 1895,
          "children": [
            {
              "name": "Andrea anota los correos del CSV",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:49:31.417Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 75,
                "column": 17
              }
            },
            {
              "name": "Andrea importa el archivo contactos.csv",
              "outcome": "SUCCESS",
              "duration": 1853,
              "children": [
                {
                  "name": "Andrea abre el menú de contactos",
                  "outcome": "SUCCESS",
                  "duration": 1313,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:31.433Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 8,
                    "column": 32
                  }
                },
                {
                  "name": "Andrea sube el CSV e inicia la importación",
                  "outcome": "SUCCESS",
                  "duration": 507,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:32.764Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 42,
                    "column": 13
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:31.432Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 76,
                "column": 20
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:31.406Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
            "line": 13
          }
        },
        {
          "name": "Entonces ella ve el aviso \"You will be notified via email when the import is complete.\"",
          "outcome": "SUCCESS",
          "duration": 358,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"You will be notified via email when the import is complete.\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 324,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:49:33.309Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:33.302Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
            "line": 14
          }
        },
        {
          "name": "Y los contactos del CSV quedan creados",
          "outcome": "SUCCESS",
          "duration": 103351,
          "children": [
            {
              "name": "Andrea ensures that los contactos con el correo import1.1794782971408@chatwoot.test does eventually have property length that does equal 1",
              "outcome": "SUCCESS",
              "duration": 103090,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:49:33.667Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 84,
                "column": 14
              }
            },
            {
              "name": "Andrea ensures that los contactos con el correo import2.1794782971408@chatwoot.test does eventually have property length that does equal 1",
              "outcome": "SUCCESS",
              "duration": 84,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:16.799Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 84,
                "column": 14
              }
            },
            {
              "name": "Andrea ensures that los contactos con el correo import3.1794782971408@chatwoot.test does eventually have property length that does equal 1",
              "outcome": "SUCCESS",
              "duration": 88,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:16.905Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 84,
                "column": 14
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:49:33.661Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
            "line": 15
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 108176,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2446,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 2364,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1572,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:29.021Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 73,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:30.607Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:30.701Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 87,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:30.731Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 525,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:30.842Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:49:29.021Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:28.957Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
                "line": 9
              }
            },
            {
              "name": "Cuando ella importa un CSV con 3 contactos nuevos",
              "outcome": "SUCCESS",
              "duration": 1895,
              "children": [
                {
                  "name": "Andrea anota los correos del CSV",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:31.417Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 75,
                    "column": 17
                  }
                },
                {
                  "name": "Andrea importa el archivo contactos.csv",
                  "outcome": "SUCCESS",
                  "duration": 1853,
                  "children": [
                    {
                      "name": "Andrea abre el menú de contactos",
                      "outcome": "SUCCESS",
                      "duration": 1313,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:31.433Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 8,
                        "column": 32
                      }
                    },
                    {
                      "name": "Andrea sube el CSV e inicia la importación",
                      "outcome": "SUCCESS",
                      "duration": 507,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:49:32.764Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 42,
                        "column": 13
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:49:31.432Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 76,
                    "column": 20
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:31.406Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
                "line": 13
              }
            },
            {
              "name": "Entonces ella ve el aviso \"You will be notified via email when the import is complete.\"",
              "outcome": "SUCCESS",
              "duration": 358,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"You will be notified via email when the import is complete.\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 324,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:33.309Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:33.302Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
                "line": 14
              }
            },
            {
              "name": "Y los contactos del CSV quedan creados",
              "outcome": "SUCCESS",
              "duration": 103351,
              "children": [
                {
                  "name": "Andrea ensures that los contactos con el correo import1.1794782971408@chatwoot.test does eventually have property length that does equal 1",
                  "outcome": "SUCCESS",
                  "duration": 103090,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:49:33.667Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 84,
                    "column": 14
                  }
                },
                {
                  "name": "Andrea ensures that los contactos con el correo import2.1794782971408@chatwoot.test does eventually have property length that does equal 1",
                  "outcome": "SUCCESS",
                  "duration": 84,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:16.799Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 84,
                    "column": 14
                  }
                },
                {
                  "name": "Andrea ensures that los contactos con el correo import3.1794782971408@chatwoot.test does eventually have property length that does equal 1",
                  "outcome": "SUCCESS",
                  "duration": 88,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:16.905Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 84,
                    "column": 14
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:49:33.661Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
                "line": 15
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero importar contactos desde un archivo CSV\nPara no registrarlos uno por uno</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature:12"
    },
    {
      "name": "[CP-07-03] Una importación sin archivo se rechaza",
      "category": "[Daniel Ortiz] RF-07 Importación de contactos desde CSV",
      "outcome": "SUCCESS",
      "duration": 4123,
      "startedAt": "2026-11-15T22:51:17.139Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
        "line": 18
      },
      "tags": [
        {
          "type": "capability",
          "name": "Daniel"
        },
        {
          "type": "feature",
          "name": "[Daniel Ortiz] RF-07 Importación de contactos desde CSV"
        },
        {
          "type": "tag",
          "name": "danielortiz"
        },
        {
          "type": "tag",
          "name": "rf07"
        },
        {
          "type": "tag",
          "name": "cp-07-03"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 3792,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 3697,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 2392,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:17.226Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 58,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:19.636Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:19.717Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 114,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:19.747Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 1025,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:19.887Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:17.225Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:17.142Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
            "line": 9
          }
        },
        {
          "name": "Cuando ella envía la importación sin archivo por la API",
          "outcome": "SUCCESS",
          "duration": 177,
          "children": [
            {
              "name": "Andrea llama POST a la API",
              "outcome": "SUCCESS",
              "duration": 158,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:20.942Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 90,
                "column": 43
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:20.935Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
            "line": 19
          }
        },
        {
          "name": "Entonces la API responde 422",
          "outcome": "SUCCESS",
          "duration": 38,
          "children": [
            {
              "name": "Andrea ensures that el código de la última respuesta does equal 422",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:21.126Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 33,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:21.114Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
            "line": 20
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 4123,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 3792,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 3697,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 2392,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:17.226Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 58,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:19.636Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:19.717Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 114,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:19.747Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 1025,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:19.887Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:17.225Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:17.142Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
                "line": 9
              }
            },
            {
              "name": "Cuando ella envía la importación sin archivo por la API",
              "outcome": "SUCCESS",
              "duration": 177,
              "children": [
                {
                  "name": "Andrea llama POST a la API",
                  "outcome": "SUCCESS",
                  "duration": 158,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:20.942Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 90,
                    "column": 43
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:20.935Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
                "line": 19
              }
            },
            {
              "name": "Entonces la API responde 422",
              "outcome": "SUCCESS",
              "duration": 38,
              "children": [
                {
                  "name": "Andrea ensures that el código de la última respuesta does equal 422",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:21.126Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 33,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:21.114Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature",
                "line": 20
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero importar contactos desde un archivo CSV\nPara no registrarlos uno por uno</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf07_importacion_csv.feature:18"
    },
    {
      "name": "[CP-08-01] Agregar una nota al contacto",
      "category": "[Daniel Ortiz] RF-08 Notas de contacto",
      "outcome": "SUCCESS",
      "duration": 7067,
      "startedAt": "2026-11-15T22:51:21.266Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
        "line": 13
      },
      "tags": [
        {
          "type": "capability",
          "name": "Daniel"
        },
        {
          "type": "feature",
          "name": "[Daniel Ortiz] RF-08 Notas de contacto"
        },
        {
          "type": "tag",
          "name": "danielortiz"
        },
        {
          "type": "tag",
          "name": "rf08"
        },
        {
          "type": "tag",
          "name": "cp-08-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 3307,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 3264,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1916,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:21.294Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 80,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:23.231Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:23.326Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 119,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:23.356Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 1046,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:23.498Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:21.294Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:21.267Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
            "line": 9
          }
        },
        {
          "name": "Y que Andrea tiene un contacto nuevo",
          "outcome": "SUCCESS",
          "duration": 187,
          "children": [
            {
              "name": "Andrea prepara el contacto Contacto con notas por la API",
              "outcome": "SUCCESS",
              "duration": 166,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:24.576Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 95,
                "column": 26
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:24.574Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
            "line": 10
          }
        },
        {
          "name": "Cuando ella agrega la nota \"Prefiere que lo llamen en la tarde\" al contacto",
          "outcome": "SUCCESS",
          "duration": 3306,
          "children": [
            {
              "name": "Andrea agrega la nota \"Prefiere que lo llamen en la tarde\" al contacto",
              "outcome": "SUCCESS",
              "duration": 3285,
              "children": [
                {
                  "name": "Andrea abre las notas del contacto",
                  "outcome": "SUCCESS",
                  "duration": 1749,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:24.765Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 52,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea escribe y guarda la nota",
                  "outcome": "SUCCESS",
                  "duration": 1496,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:26.532Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 60,
                    "column": 11
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:24.765Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 107,
                "column": 40
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:24.762Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
            "line": 14
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Prefiere que lo llamen en la tarde\"",
          "outcome": "SUCCESS",
          "duration": 76,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Prefiere que lo llamen en la tarde\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 52,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:28.080Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:28.070Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
            "line": 15
          }
        },
        {
          "name": "Y el contacto tiene la nota \"Prefiere que lo llamen en la tarde\"",
          "outcome": "SUCCESS",
          "duration": 109,
          "children": [
            {
              "name": "Andrea ensures that las notas del contacto does eventually contain \"Prefiere que lo llamen en la tarde\"",
              "outcome": "SUCCESS",
              "duration": 90,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:28.152Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 115,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:28.146Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
            "line": 16
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 7067,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 3307,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 3264,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1916,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:21.294Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 80,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:23.231Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:23.326Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 119,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:23.356Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 1046,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:23.498Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:21.294Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:21.267Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
                "line": 9
              }
            },
            {
              "name": "Y que Andrea tiene un contacto nuevo",
              "outcome": "SUCCESS",
              "duration": 187,
              "children": [
                {
                  "name": "Andrea prepara el contacto Contacto con notas por la API",
                  "outcome": "SUCCESS",
                  "duration": 166,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:24.576Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 95,
                    "column": 26
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:24.574Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
                "line": 10
              }
            },
            {
              "name": "Cuando ella agrega la nota \"Prefiere que lo llamen en la tarde\" al contacto",
              "outcome": "SUCCESS",
              "duration": 3306,
              "children": [
                {
                  "name": "Andrea agrega la nota \"Prefiere que lo llamen en la tarde\" al contacto",
                  "outcome": "SUCCESS",
                  "duration": 3285,
                  "children": [
                    {
                      "name": "Andrea abre las notas del contacto",
                      "outcome": "SUCCESS",
                      "duration": 1749,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:24.765Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 52,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea escribe y guarda la nota",
                      "outcome": "SUCCESS",
                      "duration": 1496,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:26.532Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 60,
                        "column": 11
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:24.765Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 107,
                    "column": 40
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:24.762Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
                "line": 14
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Prefiere que lo llamen en la tarde\"",
              "outcome": "SUCCESS",
              "duration": 76,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Prefiere que lo llamen en la tarde\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 52,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:28.080Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:28.070Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
                "line": 15
              }
            },
            {
              "name": "Y el contacto tiene la nota \"Prefiere que lo llamen en la tarde\"",
              "outcome": "SUCCESS",
              "duration": 109,
              "children": [
                {
                  "name": "Andrea ensures that las notas del contacto does eventually contain \"Prefiere que lo llamen en la tarde\"",
                  "outcome": "SUCCESS",
                  "duration": 90,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:28.152Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 115,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:28.146Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
                "line": 16
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como agente de soporte\nQuiero dejar notas en la ficha de un contacto\nPara recordar detalles importantes del cliente</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature:13"
    },
    {
      "name": "[CP-08-02] Eliminar una nota existente",
      "category": "[Daniel Ortiz] RF-08 Notas de contacto",
      "outcome": "SUCCESS",
      "duration": 5883,
      "startedAt": "2026-11-15T22:51:28.341Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
        "line": 19
      },
      "tags": [
        {
          "type": "capability",
          "name": "Daniel"
        },
        {
          "type": "feature",
          "name": "[Daniel Ortiz] RF-08 Notas de contacto"
        },
        {
          "type": "tag",
          "name": "danielortiz"
        },
        {
          "type": "tag",
          "name": "rf08"
        },
        {
          "type": "tag",
          "name": "cp-08-02"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 3113,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 3064,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1777,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:28.377Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 54,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:30.165Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:30.237Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 103,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:30.270Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 1041,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:30.385Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:28.376Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:28.343Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
            "line": 9
          }
        },
        {
          "name": "Y que Andrea tiene un contacto nuevo",
          "outcome": "SUCCESS",
          "duration": 171,
          "children": [
            {
              "name": "Andrea prepara el contacto Contacto con notas por la API",
              "outcome": "SUCCESS",
              "duration": 151,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:31.457Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 95,
                "column": 26
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:31.456Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
            "line": 10
          }
        },
        {
          "name": "Dado que el contacto tiene la nota \"Nota para borrar\"",
          "outcome": "SUCCESS",
          "duration": 213,
          "children": [
            {
              "name": "Andrea agrega por la API la nota \"Nota para borrar\"",
              "outcome": "SUCCESS",
              "duration": 201,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:31.629Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 100,
                "column": 17
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:31.628Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
            "line": 20
          }
        },
        {
          "name": "Cuando ella elimina la nota \"Nota para borrar\"",
          "outcome": "SUCCESS",
          "duration": 2197,
          "children": [
            {
              "name": "Andrea elimina la nota \"Nota para borrar\"",
              "outcome": "SUCCESS",
              "duration": 2184,
              "children": [
                {
                  "name": "Andrea abre las notas del contacto",
                  "outcome": "SUCCESS",
                  "duration": 1274,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:31.844Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 52,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea hace clic en la papelera de la nota",
                  "outcome": "SUCCESS",
                  "duration": 889,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:33.128Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 69,
                    "column": 11
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:31.844Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 111,
                "column": 43
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:31.842Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
            "line": 21
          }
        },
        {
          "name": "Entonces el contacto ya no tiene notas",
          "outcome": "SUCCESS",
          "duration": 114,
          "children": [
            {
              "name": "Andrea ensures that las notas del contacto does eventually have property length that does equal 0",
              "outcome": "SUCCESS",
              "duration": 89,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:34.044Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 119,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:34.040Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
            "line": 22
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 5883,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 3113,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 3064,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1777,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:28.377Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 54,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:30.165Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:30.237Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 103,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:30.270Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 1041,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:30.385Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:28.376Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:28.343Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
                "line": 9
              }
            },
            {
              "name": "Y que Andrea tiene un contacto nuevo",
              "outcome": "SUCCESS",
              "duration": 171,
              "children": [
                {
                  "name": "Andrea prepara el contacto Contacto con notas por la API",
                  "outcome": "SUCCESS",
                  "duration": 151,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:31.457Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 95,
                    "column": 26
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:31.456Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
                "line": 10
              }
            },
            {
              "name": "Dado que el contacto tiene la nota \"Nota para borrar\"",
              "outcome": "SUCCESS",
              "duration": 213,
              "children": [
                {
                  "name": "Andrea agrega por la API la nota \"Nota para borrar\"",
                  "outcome": "SUCCESS",
                  "duration": 201,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:31.629Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 100,
                    "column": 17
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:31.628Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
                "line": 20
              }
            },
            {
              "name": "Cuando ella elimina la nota \"Nota para borrar\"",
              "outcome": "SUCCESS",
              "duration": 2197,
              "children": [
                {
                  "name": "Andrea elimina la nota \"Nota para borrar\"",
                  "outcome": "SUCCESS",
                  "duration": 2184,
                  "children": [
                    {
                      "name": "Andrea abre las notas del contacto",
                      "outcome": "SUCCESS",
                      "duration": 1274,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:31.844Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 52,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea hace clic en la papelera de la nota",
                      "outcome": "SUCCESS",
                      "duration": 889,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:33.128Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 69,
                        "column": 11
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:31.844Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 111,
                    "column": 43
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:31.842Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
                "line": 21
              }
            },
            {
              "name": "Entonces el contacto ya no tiene notas",
              "outcome": "SUCCESS",
              "duration": 114,
              "children": [
                {
                  "name": "Andrea ensures that las notas del contacto does eventually have property length that does equal 0",
                  "outcome": "SUCCESS",
                  "duration": 89,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:34.044Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 119,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:34.040Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature",
                "line": 22
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como agente de soporte\nQuiero dejar notas en la ficha de un contacto\nPara recordar detalles importantes del cliente</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf08_notas_contacto.feature:19"
    },
    {
      "name": "[CP-09-01] Crear un atributo de contacto de tipo número",
      "category": "[Daniel Ortiz] RF-09 Atributos personalizados",
      "outcome": "SUCCESS",
      "duration": 3774,
      "startedAt": "2026-11-15T22:51:34.228Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
        "line": 12
      },
      "tags": [
        {
          "type": "capability",
          "name": "Daniel"
        },
        {
          "type": "feature",
          "name": "[Daniel Ortiz] RF-09 Atributos personalizados"
        },
        {
          "type": "tag",
          "name": "danielortiz"
        },
        {
          "type": "tag",
          "name": "rf09"
        },
        {
          "type": "tag",
          "name": "cp-09-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1881,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1842,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1071,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:34.255Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:35.343Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 15,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:35.397Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 112,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:35.428Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 526,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:35.553Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:34.255Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:34.230Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
            "line": 9
          }
        },
        {
          "name": "Cuando ella crea el atributo de contacto \"Puntos QA\" de tipo \"Number\"",
          "outcome": "SUCCESS",
          "duration": 1705,
          "children": [
            {
              "name": "Andrea anota la clave qa_1794783096115",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:36.201Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 126,
                "column": 17
              }
            },
            {
              "name": "Andrea crea el atributo de contacto \"Puntos QA\" de tipo Number",
              "outcome": "SUCCESS",
              "duration": 1590,
              "children": [
                {
                  "name": "Andrea abre la página /settings/custom-attributes/list",
                  "outcome": "SUCCESS",
                  "duration": 538,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:36.214Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                    "line": 35,
                    "column": 31
                  }
                },
                {
                  "name": "Andrea clicks on el botón Add Custom Attribute",
                  "outcome": "SUCCESS",
                  "duration": 601,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:36.765Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 79,
                    "column": 15
                  }
                },
                {
                  "name": "Andrea elige el modelo Contact",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:37.384Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 80,
                    "column": 15
                  }
                },
                {
                  "name": "Andrea enters \"Puntos QA\" into el nombre del atributo",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:37.422Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 81,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea escribe la clave del atributo",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:37.469Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 82,
                    "column": 15
                  }
                },
                {
                  "name": "Andrea enters \"Atributo creado por Screenplay\" into la descripción del atributo",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:37.519Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 83,
                    "column": 58
                  }
                },
                {
                  "name": "Andrea elige el tipo Number",
                  "outcome": "SUCCESS",
                  "duration": 53,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:37.569Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 84,
                    "column": 15
                  }
                },
                {
                  "name": "Andrea clicks on el botón Create",
                  "outcome": "SUCCESS",
                  "duration": 148,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:37.642Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 85,
                    "column": 15
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:36.213Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 127,
                "column": 45
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:36.113Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
            "line": 13
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Custom Attribute added successfully!\"",
          "outcome": "SUCCESS",
          "duration": 50,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Custom Attribute added successfully!\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:37.826Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:37.819Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
            "line": 14
          }
        },
        {
          "name": "Y el atributo queda registrado en la cuenta",
          "outcome": "SUCCESS",
          "duration": 62,
          "children": [
            {
              "name": "Andrea ensures that las claves de los atributos personalizados does eventually contain \"qa_1794783096115\"",
              "outcome": "SUCCESS",
              "duration": 42,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:37.873Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 148,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:37.869Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
            "line": 15
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 3774,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1881,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1842,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1071,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:34.255Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 44,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:35.343Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 15,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:35.397Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 112,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:35.428Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 526,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:35.553Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:34.255Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:34.230Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
                "line": 9
              }
            },
            {
              "name": "Cuando ella crea el atributo de contacto \"Puntos QA\" de tipo \"Number\"",
              "outcome": "SUCCESS",
              "duration": 1705,
              "children": [
                {
                  "name": "Andrea anota la clave qa_1794783096115",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:36.201Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 126,
                    "column": 17
                  }
                },
                {
                  "name": "Andrea crea el atributo de contacto \"Puntos QA\" de tipo Number",
                  "outcome": "SUCCESS",
                  "duration": 1590,
                  "children": [
                    {
                      "name": "Andrea abre la página /settings/custom-attributes/list",
                      "outcome": "SUCCESS",
                      "duration": 538,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:36.214Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                        "line": 35,
                        "column": 31
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Add Custom Attribute",
                      "outcome": "SUCCESS",
                      "duration": 601,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:36.765Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 79,
                        "column": 15
                      }
                    },
                    {
                      "name": "Andrea elige el modelo Contact",
                      "outcome": "SUCCESS",
                      "duration": 27,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:37.384Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 80,
                        "column": 15
                      }
                    },
                    {
                      "name": "Andrea enters \"Puntos QA\" into el nombre del atributo",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:37.422Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 81,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea escribe la clave del atributo",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:37.469Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 82,
                        "column": 15
                      }
                    },
                    {
                      "name": "Andrea enters \"Atributo creado por Screenplay\" into la descripción del atributo",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:37.519Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 83,
                        "column": 58
                      }
                    },
                    {
                      "name": "Andrea elige el tipo Number",
                      "outcome": "SUCCESS",
                      "duration": 53,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:37.569Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 84,
                        "column": 15
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Create",
                      "outcome": "SUCCESS",
                      "duration": 148,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:37.642Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 85,
                        "column": 15
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:36.213Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 127,
                    "column": 45
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:36.113Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
                "line": 13
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Custom Attribute added successfully!\"",
              "outcome": "SUCCESS",
              "duration": 50,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Custom Attribute added successfully!\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:37.826Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:37.819Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
                "line": 14
              }
            },
            {
              "name": "Y el atributo queda registrado en la cuenta",
              "outcome": "SUCCESS",
              "duration": 62,
              "children": [
                {
                  "name": "Andrea ensures that las claves de los atributos personalizados does eventually contain \"qa_1794783096115\"",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:37.873Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 148,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:37.869Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
                "line": 15
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero agregar campos propios a los contactos\nPara guardar datos que Chatwoot no trae por defecto</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature:12"
    },
    {
      "name": "[CP-09-03] Un tipo de atributo que no existe se rechaza",
      "category": "[Daniel Ortiz] RF-09 Atributos personalizados",
      "outcome": "SUCCESS",
      "duration": 2400,
      "startedAt": "2026-11-15T22:51:38.005Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
        "line": 18
      },
      "tags": [
        {
          "type": "capability",
          "name": "Daniel"
        },
        {
          "type": "feature",
          "name": "[Daniel Ortiz] RF-09 Atributos personalizados"
        },
        {
          "type": "tag",
          "name": "danielortiz"
        },
        {
          "type": "tag",
          "name": "rf09"
        },
        {
          "type": "tag",
          "name": "cp-09-03"
        },
        {
          "type": "tag",
          "name": "d-03"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1941,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1908,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1127,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:38.029Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 47,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:39.167Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:39.236Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 103,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:39.270Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 528,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:39.392Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:38.028Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:38.007Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
            "line": 9
          }
        },
        {
          "name": "Cuando ella intenta crear por la API un atributo de contacto de tipo \"color\"",
          "outcome": "SUCCESS",
          "duration": 157,
          "children": [
            {
              "name": "Andrea anota la clave qa_1794783099952",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:39.958Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 134,
                "column": 17
              }
            },
            {
              "name": "Andrea llama POST a la API",
              "outcome": "SUCCESS",
              "duration": 117,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:39.970Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 135,
                "column": 22
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:39.950Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
            "line": 19
          }
        },
        {
          "name": "Entonces la API responde 422",
          "outcome": "SUCCESS",
          "duration": 31,
          "children": [
            {
              "name": "Andrea ensures that el código de la última respuesta does equal 422",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:40.112Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 33,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:40.108Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
            "line": 20
          }
        },
        {
          "name": "Y el atributo no queda registrado en la cuenta",
          "outcome": "SUCCESS",
          "duration": 62,
          "children": [
            {
              "name": "Andrea ensures that las claves de los atributos personalizados does not contain \"qa_1794783099952\"",
              "outcome": "SUCCESS",
              "duration": 38,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:40.143Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 153,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:40.140Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
            "line": 21
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 2400,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1941,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1908,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1127,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:38.029Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 47,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:39.167Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:39.236Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 103,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:39.270Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 528,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:39.392Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:38.028Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:38.007Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
                "line": 9
              }
            },
            {
              "name": "Cuando ella intenta crear por la API un atributo de contacto de tipo \"color\"",
              "outcome": "SUCCESS",
              "duration": 157,
              "children": [
                {
                  "name": "Andrea anota la clave qa_1794783099952",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:39.958Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 134,
                    "column": 17
                  }
                },
                {
                  "name": "Andrea llama POST a la API",
                  "outcome": "SUCCESS",
                  "duration": 117,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:39.970Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 135,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:39.950Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
                "line": 19
              }
            },
            {
              "name": "Entonces la API responde 422",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [
                {
                  "name": "Andrea ensures that el código de la última respuesta does equal 422",
                  "outcome": "SUCCESS",
                  "duration": 0,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:40.112Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 33,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:40.108Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
                "line": 20
              }
            },
            {
              "name": "Y el atributo no queda registrado en la cuenta",
              "outcome": "SUCCESS",
              "duration": 62,
              "children": [
                {
                  "name": "Andrea ensures that las claves de los atributos personalizados does not contain \"qa_1794783099952\"",
                  "outcome": "SUCCESS",
                  "duration": 38,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:40.143Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 153,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:40.140Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature",
                "line": 21
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero agregar campos propios a los contactos\nPara guardar datos que Chatwoot no trae por defecto</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf09_atributos.feature:18"
    },
    {
      "name": "[CP-10-01] Filtrar los contactos por nombre",
      "category": "[Daniel Ortiz] RF-10 Filtros avanzados y segmentos",
      "outcome": "SUCCESS",
      "duration": 4688,
      "startedAt": "2026-11-15T22:51:40.410Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
        "line": 12
      },
      "tags": [
        {
          "type": "capability",
          "name": "Daniel"
        },
        {
          "type": "feature",
          "name": "[Daniel Ortiz] RF-10 Filtros avanzados y segmentos"
        },
        {
          "type": "tag",
          "name": "danielortiz"
        },
        {
          "type": "tag",
          "name": "rf10"
        },
        {
          "type": "tag",
          "name": "cp-10-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 2489,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2447,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1116,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:40.439Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 64,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:41.566Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:41.653Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 118,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:41.695Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 1036,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:41.836Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:40.438Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:40.412Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
            "line": 9
          }
        },
        {
          "name": "Dado que Andrea tiene un contacto con un nombre único",
          "outcome": "SUCCESS",
          "duration": 336,
          "children": [
            {
              "name": "Andrea prepara el contacto Segmento 1794783102903 por la API",
              "outcome": "SUCCESS",
              "duration": 321,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:42.905Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 158,
                "column": 26
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:42.902Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
            "line": 13
          }
        },
        {
          "name": "Cuando ella filtra los contactos por ese nombre",
          "outcome": "SUCCESS",
          "duration": 1388,
          "children": [
            {
              "name": "Andrea filtra los contactos por el nombre Segmento 1794783102903",
              "outcome": "SUCCESS",
              "duration": 1370,
              "children": [
                {
                  "name": "Andrea abre el panel de filtros y aplica el filtro",
                  "outcome": "SUCCESS",
                  "duration": 1349,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:43.245Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                    "line": 94,
                    "column": 13
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:43.245Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 162,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:43.239Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
            "line": 14
          }
        },
        {
          "name": "Entonces ella ve el contacto filtrado",
          "outcome": "SUCCESS",
          "duration": 392,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Segmento 1794783102903\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 312,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:44.633Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 167,
                "column": 12
              }
            },
            {
              "name": "Andrea ensures that si la pantalla muestra \"Showing 1 - 1 of 1 contact\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 37,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:44.957Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 168,
                "column": 12
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:44.628Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
            "line": 15
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 4688,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2489,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 2447,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1116,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:40.439Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 64,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:41.566Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:41.653Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 118,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:41.695Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 1036,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:41.836Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:40.438Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:40.412Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
                "line": 9
              }
            },
            {
              "name": "Dado que Andrea tiene un contacto con un nombre único",
              "outcome": "SUCCESS",
              "duration": 336,
              "children": [
                {
                  "name": "Andrea prepara el contacto Segmento 1794783102903 por la API",
                  "outcome": "SUCCESS",
                  "duration": 321,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:42.905Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 158,
                    "column": 26
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:42.902Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
                "line": 13
              }
            },
            {
              "name": "Cuando ella filtra los contactos por ese nombre",
              "outcome": "SUCCESS",
              "duration": 1388,
              "children": [
                {
                  "name": "Andrea filtra los contactos por el nombre Segmento 1794783102903",
                  "outcome": "SUCCESS",
                  "duration": 1370,
                  "children": [
                    {
                      "name": "Andrea abre el panel de filtros y aplica el filtro",
                      "outcome": "SUCCESS",
                      "duration": 1349,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:43.245Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Contacts.ts",
                        "line": 94,
                        "column": 13
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:43.245Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 162,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:43.239Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
                "line": 14
              }
            },
            {
              "name": "Entonces ella ve el contacto filtrado",
              "outcome": "SUCCESS",
              "duration": 392,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Segmento 1794783102903\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 312,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:44.633Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 167,
                    "column": 12
                  }
                },
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Showing 1 - 1 of 1 contact\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 37,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:44.957Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 168,
                    "column": 12
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:44.628Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
                "line": 15
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero filtrar los contactos por sus datos\nPara encontrar grupos de clientes</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature:12"
    },
    {
      "name": "[CP-10-03] Un filtro con un operador inválido se rechaza",
      "category": "[Daniel Ortiz] RF-10 Filtros avanzados y segmentos",
      "outcome": "SUCCESS",
      "duration": 2839,
      "startedAt": "2026-11-15T22:51:45.102Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
        "line": 18
      },
      "tags": [
        {
          "type": "capability",
          "name": "Daniel"
        },
        {
          "type": "feature",
          "name": "[Daniel Ortiz] RF-10 Filtros avanzados y segmentos"
        },
        {
          "type": "tag",
          "name": "danielortiz"
        },
        {
          "type": "tag",
          "name": "rf10"
        },
        {
          "type": "tag",
          "name": "cp-10-03"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 2527,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2484,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1195,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:45.132Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 45,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:46.345Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:46.402Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 103,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:46.437Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 1043,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:46.558Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:45.131Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:45.104Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
            "line": 9
          }
        },
        {
          "name": "Cuando ella filtra los contactos por la API con el operador \"operador_raro\"",
          "outcome": "SUCCESS",
          "duration": 104,
          "children": [
            {
              "name": "Andrea llama POST a la API",
              "outcome": "SUCCESS",
              "duration": 92,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:47.633Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                "line": 174,
                "column": 22
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:47.631Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
            "line": 19
          }
        },
        {
          "name": "Entonces la API responde 422",
          "outcome": "SUCCESS",
          "duration": 19,
          "children": [
            {
              "name": "Andrea ensures that el código de la última respuesta does equal 422",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:47.741Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 33,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:47.736Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
            "line": 20
          }
        },
        {
          "name": "Y el error de la API menciona \"Invalid operator\"",
          "outcome": "SUCCESS",
          "duration": 16,
          "children": [
            {
              "name": "Andrea ensures that <<el error de la última respuesta>>.as(<<Function>>) does include \"Invalid operator\"",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:47.760Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 38,
                "column": 12
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:47.756Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
            "line": 21
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 2839,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2527,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 2484,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1195,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:45.132Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 45,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:46.345Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:46.402Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 103,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:46.437Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 1043,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:46.558Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:45.131Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:45.104Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
                "line": 9
              }
            },
            {
              "name": "Cuando ella filtra los contactos por la API con el operador \"operador_raro\"",
              "outcome": "SUCCESS",
              "duration": 104,
              "children": [
                {
                  "name": "Andrea llama POST a la API",
                  "outcome": "SUCCESS",
                  "duration": 92,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:47.633Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/daniel.steps.ts",
                    "line": 174,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:47.631Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
                "line": 19
              }
            },
            {
              "name": "Entonces la API responde 422",
              "outcome": "SUCCESS",
              "duration": 19,
              "children": [
                {
                  "name": "Andrea ensures that el código de la última respuesta does equal 422",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:47.741Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 33,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:47.736Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
                "line": 20
              }
            },
            {
              "name": "Y el error de la API menciona \"Invalid operator\"",
              "outcome": "SUCCESS",
              "duration": 16,
              "children": [
                {
                  "name": "Andrea ensures that <<el error de la última respuesta>>.as(<<Function>>) does include \"Invalid operator\"",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:47.760Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 38,
                    "column": 12
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:47.756Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature",
                "line": 21
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero filtrar los contactos por sus datos\nPara encontrar grupos de clientes</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/daniel/rf10_filtros_segmentos.feature:18"
    },
    {
      "name": "[CP-11-01] Crear una respuesta predefinida e insertarla en el chat",
      "category": "[Juan Pablo Berrío] RF-11 Respuestas predefinidas",
      "outcome": "SUCCESS",
      "duration": 7292,
      "startedAt": "2026-11-15T22:51:47.947Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
        "line": 12
      },
      "tags": [
        {
          "type": "capability",
          "name": "Juanpablo"
        },
        {
          "type": "feature",
          "name": "[Juan Pablo Berrío] RF-11 Respuestas predefinidas"
        },
        {
          "type": "tag",
          "name": "juanpabloberrio"
        },
        {
          "type": "tag",
          "name": "rf11"
        },
        {
          "type": "tag",
          "name": "cp-11-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1989,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1952,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1180,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:47.973Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 41,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:49.169Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:49.233Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 111,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:49.265Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 527,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:49.387Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:47.973Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:47.949Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
            "line": 9
          }
        },
        {
          "name": "Cuando ella crea una respuesta predefinida con el texto \"Hola, gracias por escribir a QA Chatwoot\"",
          "outcome": "SUCCESS",
          "duration": 1490,
          "children": [
            {
              "name": "Andrea anota el código qa-saludo-1794783109942",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:49.994Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 18,
                "column": 17
              }
            },
            {
              "name": "Andrea crea la respuesta predefinida qa-saludo-1794783109942",
              "outcome": "SUCCESS",
              "duration": 1407,
              "children": [
                {
                  "name": "Andrea abre la página /settings/canned-response/list",
                  "outcome": "SUCCESS",
                  "duration": 457,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:50.008Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                    "line": 35,
                    "column": 31
                  }
                },
                {
                  "name": "Andrea clicks on el botón Add canned response",
                  "outcome": "SUCCESS",
                  "duration": 642,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:50.482Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 46,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea enters \"qa-saludo-1794783109942\" into el código corto",
                  "outcome": "SUCCESS",
                  "duration": 77,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:51.139Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 47,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea escribe el contenido de la respuesta",
                  "outcome": "SUCCESS",
                  "duration": 46,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:51.234Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 48,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea clicks on el botón Submit",
                  "outcome": "SUCCESS",
                  "duration": 96,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:51.303Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 50,
                    "column": 13
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:50.007Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 19,
                "column": 26
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:49.940Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
            "line": 13
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Canned response added successfully.\"",
          "outcome": "SUCCESS",
          "duration": 279,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Canned response added successfully.\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 247,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:51.439Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:51.431Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
            "line": 14
          }
        },
        {
          "name": "Cuando ella la inserta con su código corto en una conversación nueva",
          "outcome": "SUCCESS",
          "duration": 3418,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"Buenos días\"",
              "outcome": "SUCCESS",
              "duration": 466,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:51.714Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 25,
                "column": 23
              }
            },
            {
              "name": "Andrea abre la conversación",
              "outcome": "SUCCESS",
              "duration": 2436,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:52.205Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                "line": 33,
                "column": 9
              }
            },
            {
              "name": "Andrea inserta la respuesta /qa-saludo-1794783109942 en el chat",
              "outcome": "SUCCESS",
              "duration": 459,
              "children": [
                {
                  "name": "Andrea escribe /qa-saludo-1794783109942 y elige la sugerencia",
                  "outcome": "SUCCESS",
                  "duration": 444,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:54.654Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 57,
                    "column": 13
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:54.653Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 27,
                "column": 26
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:51.710Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
            "line": 15
          }
        },
        {
          "name": "Entonces el editor de respuesta contiene \"Hola, gracias por escribir a QA Chatwoot\"",
          "outcome": "SUCCESS",
          "duration": 40,
          "children": [
            {
              "name": "Andrea ensures that el texto del editor does eventually include \"Hola, gracias por escribir a QA Chatwoot\"",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:55.132Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 32,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:55.128Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
            "line": 16
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 7292,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1989,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1952,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1180,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:47.973Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 41,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:49.169Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:49.233Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 111,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:49.265Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 527,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:49.387Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:47.973Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:47.949Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
                "line": 9
              }
            },
            {
              "name": "Cuando ella crea una respuesta predefinida con el texto \"Hola, gracias por escribir a QA Chatwoot\"",
              "outcome": "SUCCESS",
              "duration": 1490,
              "children": [
                {
                  "name": "Andrea anota el código qa-saludo-1794783109942",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:49.994Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 18,
                    "column": 17
                  }
                },
                {
                  "name": "Andrea crea la respuesta predefinida qa-saludo-1794783109942",
                  "outcome": "SUCCESS",
                  "duration": 1407,
                  "children": [
                    {
                      "name": "Andrea abre la página /settings/canned-response/list",
                      "outcome": "SUCCESS",
                      "duration": 457,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:50.008Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                        "line": 35,
                        "column": 31
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Add canned response",
                      "outcome": "SUCCESS",
                      "duration": 642,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:50.482Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 46,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea enters \"qa-saludo-1794783109942\" into el código corto",
                      "outcome": "SUCCESS",
                      "duration": 77,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:51.139Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 47,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea escribe el contenido de la respuesta",
                      "outcome": "SUCCESS",
                      "duration": 46,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:51.234Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 48,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Submit",
                      "outcome": "SUCCESS",
                      "duration": 96,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:51.303Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 50,
                        "column": 13
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:50.007Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 19,
                    "column": 26
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:49.940Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
                "line": 13
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Canned response added successfully.\"",
              "outcome": "SUCCESS",
              "duration": 279,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Canned response added successfully.\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 247,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:51.439Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:51.431Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
                "line": 14
              }
            },
            {
              "name": "Cuando ella la inserta con su código corto en una conversación nueva",
              "outcome": "SUCCESS",
              "duration": 3418,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"Buenos días\"",
                  "outcome": "SUCCESS",
                  "duration": 466,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:51.714Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 25,
                    "column": 23
                  }
                },
                {
                  "name": "Andrea abre la conversación",
                  "outcome": "SUCCESS",
                  "duration": 2436,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:52.205Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 33,
                    "column": 9
                  }
                },
                {
                  "name": "Andrea inserta la respuesta /qa-saludo-1794783109942 en el chat",
                  "outcome": "SUCCESS",
                  "duration": 459,
                  "children": [
                    {
                      "name": "Andrea escribe /qa-saludo-1794783109942 y elige la sugerencia",
                      "outcome": "SUCCESS",
                      "duration": 444,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:54.654Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 57,
                        "column": 13
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:54.653Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 27,
                    "column": 26
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:51.710Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
                "line": 15
              }
            },
            {
              "name": "Entonces el editor de respuesta contiene \"Hola, gracias por escribir a QA Chatwoot\"",
              "outcome": "SUCCESS",
              "duration": 40,
              "children": [
                {
                  "name": "Andrea ensures that el texto del editor does eventually include \"Hola, gracias por escribir a QA Chatwoot\"",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:55.132Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 32,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:55.128Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
                "line": 16
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como agente de soporte\nQuiero guardar respuestas frecuentes con un código corto\nPara responder más rápido</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature:12"
    },
    {
      "name": "[CP-11-03] Un código corto repetido se rechaza",
      "category": "[Juan Pablo Berrío] RF-11 Respuestas predefinidas",
      "outcome": "SUCCESS",
      "duration": 3060,
      "startedAt": "2026-11-15T22:51:55.243Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
        "line": 19
      },
      "tags": [
        {
          "type": "capability",
          "name": "Juanpablo"
        },
        {
          "type": "feature",
          "name": "[Juan Pablo Berrío] RF-11 Respuestas predefinidas"
        },
        {
          "type": "tag",
          "name": "juanpabloberrio"
        },
        {
          "type": "tag",
          "name": "rf11"
        },
        {
          "type": "tag",
          "name": "cp-11-03"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 2444,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2402,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1133,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:55.270Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:56.417Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:56.479Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 91,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:56.509Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 1042,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:56.617Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:55.269Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:55.244Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
            "line": 9
          }
        },
        {
          "name": "Dado que Andrea ya tiene una respuesta predefinida con un código nuevo",
          "outcome": "SUCCESS",
          "duration": 214,
          "children": [
            {
              "name": "Andrea crea por la API la respuesta qa-repetido-1794783117689",
              "outcome": "SUCCESS",
              "duration": 199,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:57.690Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 38,
                "column": 17
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:57.688Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
            "line": 20
          }
        },
        {
          "name": "Cuando ella intenta crear por la API otra respuesta con el mismo código",
          "outcome": "SUCCESS",
          "duration": 266,
          "children": [
            {
              "name": "Andrea llama POST a la API",
              "outcome": "SUCCESS",
              "duration": 252,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:57.906Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 47,
                "column": 22
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:57.903Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
            "line": 21
          }
        },
        {
          "name": "Entonces la API responde 422",
          "outcome": "SUCCESS",
          "duration": 25,
          "children": [
            {
              "name": "Andrea ensures that el código de la última respuesta does equal 422",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:51:58.176Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 33,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:58.170Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
            "line": 22
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 3060,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2444,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 2402,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1133,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:55.270Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 43,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:56.417Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:56.479Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 91,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:56.509Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 1042,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:56.617Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:55.269Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:55.244Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
                "line": 9
              }
            },
            {
              "name": "Dado que Andrea ya tiene una respuesta predefinida con un código nuevo",
              "outcome": "SUCCESS",
              "duration": 214,
              "children": [
                {
                  "name": "Andrea crea por la API la respuesta qa-repetido-1794783117689",
                  "outcome": "SUCCESS",
                  "duration": 199,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:57.690Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 38,
                    "column": 17
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:57.688Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
                "line": 20
              }
            },
            {
              "name": "Cuando ella intenta crear por la API otra respuesta con el mismo código",
              "outcome": "SUCCESS",
              "duration": 266,
              "children": [
                {
                  "name": "Andrea llama POST a la API",
                  "outcome": "SUCCESS",
                  "duration": 252,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:57.906Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 47,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:57.903Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
                "line": 21
              }
            },
            {
              "name": "Entonces la API responde 422",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [
                {
                  "name": "Andrea ensures that el código de la última respuesta does equal 422",
                  "outcome": "SUCCESS",
                  "duration": 0,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:58.176Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 33,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:58.170Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature",
                "line": 22
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como agente de soporte\nQuiero guardar respuestas frecuentes con un código corto\nPara responder más rápido</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf11_respuestas_predefinidas.feature:19"
    },
    {
      "name": "[CP-12-01] Ejecutar una macro que etiqueta, asigna un equipo y resuelve",
      "category": "[Juan Pablo Berrío] RF-12 Macros",
      "outcome": "SUCCESS",
      "duration": 10993,
      "startedAt": "2026-11-15T22:51:58.311Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
        "line": 9
      },
      "tags": [
        {
          "type": "capability",
          "name": "Juanpablo"
        },
        {
          "type": "feature",
          "name": "[Juan Pablo Berrío] RF-12 Macros"
        },
        {
          "type": "tag",
          "name": "juanpabloberrio"
        },
        {
          "type": "tag",
          "name": "rf12"
        },
        {
          "type": "tag",
          "name": "cp-12-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 2168,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2064,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1294,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:58.407Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:59.713Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 15,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:59.775Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 101,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:59.806Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 527,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:51:59.933Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:58.407Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:51:58.314Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 10
          }
        },
        {
          "name": "Y que Andrea tiene una macro global que etiqueta, asigna un equipo y resuelve",
          "outcome": "SUCCESS",
          "duration": 291,
          "children": [
            {
              "name": "Andrea crea por la API la etiqueta, el equipo y la macro",
              "outcome": "SUCCESS",
              "duration": 272,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:00.489Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 54,
                "column": 17
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:00.483Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 11
          }
        },
        {
          "name": "Y que Andrea recibió una conversación con el mensaje \"Ya resolvieron mi caso\"",
          "outcome": "SUCCESS",
          "duration": 992,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"Ya resolvieron mi caso\"",
              "outcome": "SUCCESS",
              "duration": 979,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:00.776Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 17,
                "column": 44
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:00.775Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 12
          }
        },
        {
          "name": "Cuando ella abre la conversación",
          "outcome": "SUCCESS",
          "duration": 3049,
          "children": [
            {
              "name": "Andrea abre la conversación",
              "outcome": "SUCCESS",
              "duration": 3025,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:01.770Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                "line": 33,
                "column": 9
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:01.768Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 13
          }
        },
        {
          "name": "Y ella ejecuta esa macro",
          "outcome": "SUCCESS",
          "duration": 540,
          "children": [
            {
              "name": "Andrea ejecuta la macro \"Cerrar con etiqueta 1794783120491\"",
              "outcome": "SUCCESS",
              "duration": 525,
              "children": [
                {
                  "name": "Andrea abre las acciones de la conversación",
                  "outcome": "SUCCESS",
                  "duration": 53,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:04.822Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 43,
                    "column": 9
                  }
                },
                {
                  "name": "Andrea despliega la sección Macros y ejecuta la macro",
                  "outcome": "SUCCESS",
                  "duration": 434,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:04.896Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 69,
                    "column": 13
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:04.822Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 77,
                "column": 39
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:04.818Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 14
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Macro executed successfully\"",
          "outcome": "SUCCESS",
          "duration": 51,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Macro executed successfully\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 24,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:05.364Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:05.359Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 15
          }
        },
        {
          "name": "Y la conversación queda en estado \"resolved\"",
          "outcome": "SUCCESS",
          "duration": 3660,
          "children": [
            {
              "name": "Andrea ensures that el estado de la conversación does eventually equal \"resolved\"",
              "outcome": "SUCCESS",
              "duration": 3641,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:05.416Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 29,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:05.410Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 16
          }
        },
        {
          "name": "Y la conversación tiene la etiqueta y el equipo de la macro",
          "outcome": "SUCCESS",
          "duration": 168,
          "children": [
            {
              "name": "Andrea ensures that las etiquetas de la conversación does eventually contain \"qa-macro-1794783120491\"",
              "outcome": "SUCCESS",
              "duration": 39,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:09.077Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 83,
                "column": 12
              }
            },
            {
              "name": "Andrea ensures that el equipo de la conversación does eventually include \"qa-macro-equipo-1794783120491\"",
              "outcome": "SUCCESS",
              "duration": 78,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:09.137Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 84,
                "column": 12
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:09.070Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 17
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 10993,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2168,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 2064,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1294,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:58.407Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 44,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:59.713Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 15,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:59.775Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 101,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:59.806Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 527,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:51:59.933Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:51:58.407Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:51:58.314Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 10
              }
            },
            {
              "name": "Y que Andrea tiene una macro global que etiqueta, asigna un equipo y resuelve",
              "outcome": "SUCCESS",
              "duration": 291,
              "children": [
                {
                  "name": "Andrea crea por la API la etiqueta, el equipo y la macro",
                  "outcome": "SUCCESS",
                  "duration": 272,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:00.489Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 54,
                    "column": 17
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:00.483Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 11
              }
            },
            {
              "name": "Y que Andrea recibió una conversación con el mensaje \"Ya resolvieron mi caso\"",
              "outcome": "SUCCESS",
              "duration": 992,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"Ya resolvieron mi caso\"",
                  "outcome": "SUCCESS",
                  "duration": 979,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:00.776Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 17,
                    "column": 44
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:00.775Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 12
              }
            },
            {
              "name": "Cuando ella abre la conversación",
              "outcome": "SUCCESS",
              "duration": 3049,
              "children": [
                {
                  "name": "Andrea abre la conversación",
                  "outcome": "SUCCESS",
                  "duration": 3025,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:01.770Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 33,
                    "column": 9
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:01.768Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 13
              }
            },
            {
              "name": "Y ella ejecuta esa macro",
              "outcome": "SUCCESS",
              "duration": 540,
              "children": [
                {
                  "name": "Andrea ejecuta la macro \"Cerrar con etiqueta 1794783120491\"",
                  "outcome": "SUCCESS",
                  "duration": 525,
                  "children": [
                    {
                      "name": "Andrea abre las acciones de la conversación",
                      "outcome": "SUCCESS",
                      "duration": 53,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:04.822Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                        "line": 43,
                        "column": 9
                      }
                    },
                    {
                      "name": "Andrea despliega la sección Macros y ejecuta la macro",
                      "outcome": "SUCCESS",
                      "duration": 434,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:04.896Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 69,
                        "column": 13
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:04.822Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 77,
                    "column": 39
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:04.818Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 14
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Macro executed successfully\"",
              "outcome": "SUCCESS",
              "duration": 51,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Macro executed successfully\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:05.364Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:05.359Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 15
              }
            },
            {
              "name": "Y la conversación queda en estado \"resolved\"",
              "outcome": "SUCCESS",
              "duration": 3660,
              "children": [
                {
                  "name": "Andrea ensures that el estado de la conversación does eventually equal \"resolved\"",
                  "outcome": "SUCCESS",
                  "duration": 3641,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:05.416Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 29,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:05.410Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 16
              }
            },
            {
              "name": "Y la conversación tiene la etiqueta y el equipo de la macro",
              "outcome": "SUCCESS",
              "duration": 168,
              "children": [
                {
                  "name": "Andrea ensures that las etiquetas de la conversación does eventually contain \"qa-macro-1794783120491\"",
                  "outcome": "SUCCESS",
                  "duration": 39,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:09.077Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 83,
                    "column": 12
                  }
                },
                {
                  "name": "Andrea ensures that el equipo de la conversación does eventually include \"qa-macro-equipo-1794783120491\"",
                  "outcome": "SUCCESS",
                  "duration": 78,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:09.137Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 84,
                    "column": 12
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:09.070Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 17
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como agente de soporte\nQuiero ejecutar varias acciones con un solo clic\nPara cerrar los casos repetitivos sin pasos manuales</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature:9"
    },
    {
      "name": "[CP-12-02] Una macro personal no la ve otro agente; la global sí",
      "category": "[Juan Pablo Berrío] RF-12 Macros",
      "outcome": "SUCCESS",
      "duration": 374,
      "startedAt": "2026-11-15T22:52:09.309Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
        "line": 20
      },
      "tags": [
        {
          "type": "capability",
          "name": "Juanpablo"
        },
        {
          "type": "feature",
          "name": "[Juan Pablo Berrío] RF-12 Macros"
        },
        {
          "type": "tag",
          "name": "juanpabloberrio"
        },
        {
          "type": "tag",
          "name": "rf12"
        },
        {
          "type": "tag",
          "name": "cp-12-02"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea creó una macro personal y una macro global",
          "outcome": "SUCCESS",
          "duration": 137,
          "children": [
            {
              "name": "Andrea crea por la API una macro personal y una global",
              "outcome": "SUCCESS",
              "duration": 109,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:09.313Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 90,
                "column": 17
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:09.310Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 21
          }
        },
        {
          "name": "Cuando Carlos consulta las macros por la API",
          "outcome": "SUCCESS",
          "duration": 126,
          "children": [
            {
              "name": "Carlos llama GET a la API",
              "outcome": "SUCCESS",
              "duration": 109,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:09.450Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 102,
                "column": 43
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:09.448Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 22
          }
        },
        {
          "name": "Entonces Carlos ve la macro global de Andrea pero no la personal",
          "outcome": "SUCCESS",
          "duration": 47,
          "children": [
            {
              "name": "Carlos ensures that los nombres en la última respuesta does contain \"Global 1794783129314\"",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:09.583Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 108,
                "column": 12
              }
            },
            {
              "name": "Carlos ensures that los nombres en la última respuesta does not contain \"Personal 1794783129314\"",
              "outcome": "SUCCESS",
              "duration": 3,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:09.605Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 109,
                "column": 12
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:09.574Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
            "line": 23
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 374,
          "activities": [
            {
              "name": "Dado que Andrea creó una macro personal y una macro global",
              "outcome": "SUCCESS",
              "duration": 137,
              "children": [
                {
                  "name": "Andrea crea por la API una macro personal y una global",
                  "outcome": "SUCCESS",
                  "duration": 109,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:09.313Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 90,
                    "column": 17
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:09.310Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 21
              }
            },
            {
              "name": "Cuando Carlos consulta las macros por la API",
              "outcome": "SUCCESS",
              "duration": 126,
              "children": [
                {
                  "name": "Carlos llama GET a la API",
                  "outcome": "SUCCESS",
                  "duration": 109,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:09.450Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 102,
                    "column": 43
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:09.448Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 22
              }
            },
            {
              "name": "Entonces Carlos ve la macro global de Andrea pero no la personal",
              "outcome": "SUCCESS",
              "duration": 47,
              "children": [
                {
                  "name": "Carlos ensures that los nombres en la última respuesta does contain \"Global 1794783129314\"",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:09.583Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 108,
                    "column": 12
                  }
                },
                {
                  "name": "Carlos ensures that los nombres en la última respuesta does not contain \"Personal 1794783129314\"",
                  "outcome": "SUCCESS",
                  "duration": 3,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:09.605Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 109,
                    "column": 12
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:09.574Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature",
                "line": 23
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como agente de soporte\nQuiero ejecutar varias acciones con un solo clic\nPara cerrar los casos repetitivos sin pasos manuales</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        },
        {
          "name": "Carlos",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"i1v12V6Ss7uJogdGWewhnbad\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf12_macros.feature:20"
    },
    {
      "name": "[CP-13-01] La regla etiqueta la conversación cuando llega un mensaje con \"factura\"",
      "category": "[Juan Pablo Berrío] RF-13 Reglas de automatización",
      "outcome": "SUCCESS",
      "duration": 5229,
      "startedAt": "2026-11-15T22:52:09.686Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
        "line": 9
      },
      "tags": [
        {
          "type": "capability",
          "name": "Juanpablo"
        },
        {
          "type": "feature",
          "name": "[Juan Pablo Berrío] RF-13 Reglas de automatización"
        },
        {
          "type": "tag",
          "name": "juanpabloberrio"
        },
        {
          "type": "tag",
          "name": "rf13"
        },
        {
          "type": "tag",
          "name": "cp-13-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1896,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1867,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1082,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:09.703Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:10.801Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:10.868Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 112,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:10.899Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 534,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:11.024Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:09.702Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:09.687Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
            "line": 10
          }
        },
        {
          "name": "Y que Andrea tiene una regla que etiqueta los mensajes que contienen \"factura\"",
          "outcome": "SUCCESS",
          "duration": 186,
          "children": [
            {
              "name": "Andrea crea por la API una regla para \"factura\"",
              "outcome": "SUCCESS",
              "duration": 169,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:11.590Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 116,
                "column": 17
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:11.584Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
            "line": 11
          }
        },
        {
          "name": "Cuando ella abre la lista de automatizaciones",
          "outcome": "SUCCESS",
          "duration": 881,
          "children": [
            {
              "name": "Andrea abre la página /settings/automation/list",
              "outcome": "SUCCESS",
              "duration": 864,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:11.773Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                "line": 35,
                "column": 31
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:11.771Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
            "line": 12
          }
        },
        {
          "name": "Entonces ella ve la regla en la lista",
          "outcome": "SUCCESS",
          "duration": 927,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Etiquetar facturas 1794783131592\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 906,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:12.660Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 140,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:12.653Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
            "line": 13
          }
        },
        {
          "name": "Dado que Andrea recibió una conversación con el mensaje \"Necesito una copia de mi factura\"",
          "outcome": "SUCCESS",
          "duration": 514,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"Necesito una copia de mi factura\"",
              "outcome": "SUCCESS",
              "duration": 492,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:13.585Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 17,
                "column": 44
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:13.582Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
            "line": 14
          }
        },
        {
          "name": "Entonces la conversación recibe la etiqueta de la regla",
          "outcome": "SUCCESS",
          "duration": 758,
          "children": [
            {
              "name": "Andrea ensures that las etiquetas de la conversación does eventually contain \"qa-factura-1794783131592\"",
              "outcome": "SUCCESS",
              "duration": 740,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:14.100Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 146,
                "column": 12
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:14.096Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
            "line": 15
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 5229,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1896,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1867,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1082,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:09.703Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 42,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:10.801Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:10.868Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 112,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:10.899Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 534,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:11.024Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:09.702Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:09.687Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                "line": 10
              }
            },
            {
              "name": "Y que Andrea tiene una regla que etiqueta los mensajes que contienen \"factura\"",
              "outcome": "SUCCESS",
              "duration": 186,
              "children": [
                {
                  "name": "Andrea crea por la API una regla para \"factura\"",
                  "outcome": "SUCCESS",
                  "duration": 169,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:11.590Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 116,
                    "column": 17
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:11.584Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                "line": 11
              }
            },
            {
              "name": "Cuando ella abre la lista de automatizaciones",
              "outcome": "SUCCESS",
              "duration": 881,
              "children": [
                {
                  "name": "Andrea abre la página /settings/automation/list",
                  "outcome": "SUCCESS",
                  "duration": 864,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:11.773Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                    "line": 35,
                    "column": 31
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:11.771Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                "line": 12
              }
            },
            {
              "name": "Entonces ella ve la regla en la lista",
              "outcome": "SUCCESS",
              "duration": 927,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Etiquetar facturas 1794783131592\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 906,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:12.660Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 140,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:12.653Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                "line": 13
              }
            },
            {
              "name": "Dado que Andrea recibió una conversación con el mensaje \"Necesito una copia de mi factura\"",
              "outcome": "SUCCESS",
              "duration": 514,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"Necesito una copia de mi factura\"",
                  "outcome": "SUCCESS",
                  "duration": 492,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:13.585Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 17,
                    "column": 44
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:13.582Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                "line": 14
              }
            },
            {
              "name": "Entonces la conversación recibe la etiqueta de la regla",
              "outcome": "SUCCESS",
              "duration": 758,
              "children": [
                {
                  "name": "Andrea ensures that las etiquetas de la conversación does eventually contain \"qa-factura-1794783131592\"",
                  "outcome": "SUCCESS",
                  "duration": 740,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:14.100Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 146,
                    "column": 12
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:14.096Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                "line": 15
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero reglas que actúen solas cuando llega un mensaje\nPara clasificar los casos sin intervención manual</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature:9"
    },
    {
      "name": "[CP-13-03] El retraso de ejecución solo acepta de 10 a 43 200 minutos",
      "category": "[Juan Pablo Berrío] RF-13 Reglas de automatización",
      "outcome": "SUCCESS",
      "duration": 603,
      "startedAt": "2026-11-15T22:52:15.448Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
        "line": 27
      },
      "tags": [
        {
          "type": "capability",
          "name": "Juanpablo"
        },
        {
          "type": "feature",
          "name": "[Juan Pablo Berrío] RF-13 Reglas de automatización"
        },
        {
          "type": "tag",
          "name": "juanpabloberrio"
        },
        {
          "type": "tag",
          "name": "rf13"
        },
        {
          "type": "tag",
          "name": "cp-13-03"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 603,
          "activities": []
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero reglas que actúen solas cuando llega un mensaje\nPara clasificar los casos sin intervención manual</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "scenarioOutline": {
        "template": "Cuando Andrea intenta crear por la API una regla con retraso de <minutos> minutos\nEntonces la API responde <código>",
        "parameters": [
          {
            "name": "valores límite",
            "values": {
              "minutos": "9",
              "código": "422"
            },
            "outcome": "SUCCESS",
            "duration": 146,
            "activities": [
              {
                "name": "Cuando Andrea intenta crear por la API una regla con retraso de 9 minutos",
                "outcome": "SUCCESS",
                "duration": 74,
                "children": [
                  {
                    "name": "Andrea llama POST a la API",
                    "outcome": "SUCCESS",
                    "duration": 57,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-11-15T22:52:14.933Z",
                    "location": {
                      "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                      "line": 152,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-11-15T22:52:14.930Z",
                "location": {
                  "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                  "line": 19
                }
              },
              {
                "name": "Entonces la API responde 422",
                "outcome": "SUCCESS",
                "duration": 16,
                "children": [
                  {
                    "name": "Andrea ensures that el código de la última respuesta does equal 422",
                    "outcome": "SUCCESS",
                    "duration": 1,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-11-15T22:52:15.008Z",
                    "location": {
                      "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                      "line": 33,
                      "column": 49
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-11-15T22:52:15.005Z",
                "location": {
                  "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                  "line": 20
                }
              }
            ]
          },
          {
            "name": "valores límite",
            "values": {
              "minutos": "10",
              "código": "200"
            },
            "outcome": "SUCCESS",
            "duration": 198,
            "activities": [
              {
                "name": "Cuando Andrea intenta crear por la API una regla con retraso de 10 minutos",
                "outcome": "SUCCESS",
                "duration": 130,
                "children": [
                  {
                    "name": "Andrea llama POST a la API",
                    "outcome": "SUCCESS",
                    "duration": 108,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-11-15T22:52:15.077Z",
                    "location": {
                      "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                      "line": 152,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-11-15T22:52:15.075Z",
                "location": {
                  "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                  "line": 19
                }
              },
              {
                "name": "Entonces la API responde 200",
                "outcome": "SUCCESS",
                "duration": 15,
                "children": [
                  {
                    "name": "Andrea ensures that el código de la última respuesta does equal 200",
                    "outcome": "SUCCESS",
                    "duration": 1,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-11-15T22:52:15.209Z",
                    "location": {
                      "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                      "line": 33,
                      "column": 49
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-11-15T22:52:15.206Z",
                "location": {
                  "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                  "line": 20
                }
              }
            ]
          },
          {
            "name": "valores límite",
            "values": {
              "minutos": "43200",
              "código": "200"
            },
            "outcome": "SUCCESS",
            "duration": 172,
            "activities": [
              {
                "name": "Cuando Andrea intenta crear por la API una regla con retraso de 43200 minutos",
                "outcome": "SUCCESS",
                "duration": 92,
                "children": [
                  {
                    "name": "Andrea llama POST a la API",
                    "outcome": "SUCCESS",
                    "duration": 75,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-11-15T22:52:15.280Z",
                    "location": {
                      "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                      "line": 152,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-11-15T22:52:15.277Z",
                "location": {
                  "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                  "line": 19
                }
              },
              {
                "name": "Entonces la API responde 200",
                "outcome": "SUCCESS",
                "duration": 31,
                "children": [
                  {
                    "name": "Andrea ensures that el código de la última respuesta does equal 200",
                    "outcome": "SUCCESS",
                    "duration": 1,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-11-15T22:52:15.373Z",
                    "location": {
                      "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                      "line": 33,
                      "column": 49
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-11-15T22:52:15.369Z",
                "location": {
                  "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                  "line": 20
                }
              }
            ]
          },
          {
            "name": "valores límite",
            "values": {
              "minutos": "43201",
              "código": "422"
            },
            "outcome": "SUCCESS",
            "duration": 87,
            "activities": [
              {
                "name": "Cuando Andrea intenta crear por la API una regla con retraso de 43201 minutos",
                "outcome": "SUCCESS",
                "duration": 43,
                "children": [
                  {
                    "name": "Andrea llama POST a la API",
                    "outcome": "SUCCESS",
                    "duration": 28,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-11-15T22:52:15.451Z",
                    "location": {
                      "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                      "line": 152,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-11-15T22:52:15.449Z",
                "location": {
                  "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                  "line": 19
                }
              },
              {
                "name": "Entonces la API responde 422",
                "outcome": "SUCCESS",
                "duration": 16,
                "children": [
                  {
                    "name": "Andrea ensures that el código de la última respuesta does equal 422",
                    "outcome": "SUCCESS",
                    "duration": 1,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-11-15T22:52:15.495Z",
                    "location": {
                      "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                      "line": 33,
                      "column": 49
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-11-15T22:52:15.492Z",
                "location": {
                  "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature",
                  "line": 20
                }
              }
            ]
          }
        ]
      },
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf13_automatizacion.feature:27"
    },
    {
      "name": "[CP-14-01] Crear un equipo y agregarle dos agentes",
      "category": "[Juan Pablo Berrío] RF-14 Equipos y miembros",
      "outcome": "SUCCESS",
      "duration": 3922,
      "startedAt": "2026-11-15T22:52:15.537Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
        "line": 9
      },
      "tags": [
        {
          "type": "capability",
          "name": "Juanpablo"
        },
        {
          "type": "feature",
          "name": "[Juan Pablo Berrío] RF-14 Equipos y miembros"
        },
        {
          "type": "tag",
          "name": "juanpabloberrio"
        },
        {
          "type": "tag",
          "name": "rf14"
        },
        {
          "type": "tag",
          "name": "cp-14-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1979,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1951,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1162,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:15.556Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 57,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:16.729Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:16.797Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 113,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:16.828Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 529,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:16.967Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:15.555Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:15.538Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
            "line": 10
          }
        },
        {
          "name": "Cuando ella crea un equipo nuevo con los agentes \"qa.agent@chatwoot.test\" y \"qa.agent2@chatwoot.test\"",
          "outcome": "SUCCESS",
          "duration": 1707,
          "children": [
            {
              "name": "Andrea crea el equipo qa-pagos-1794783137522 con 2 agentes",
              "outcome": "SUCCESS",
              "duration": 1651,
              "children": [
                {
                  "name": "Andrea abre la página /settings/teams/new",
                  "outcome": "SUCCESS",
                  "duration": 503,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:17.562Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                    "line": 35,
                    "column": 31
                  }
                },
                {
                  "name": "Andrea enters \"qa-pagos-1794783137522\" into el nombre del equipo",
                  "outcome": "SUCCESS",
                  "duration": 474,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:18.087Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 89,
                    "column": 30
                  }
                },
                {
                  "name": "Andrea clicks on el botón Create team",
                  "outcome": "SUCCESS",
                  "duration": 188,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:18.572Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 90,
                    "column": 15
                  }
                },
                {
                  "name": "Andrea marca los agentes y los agrega",
                  "outcome": "SUCCESS",
                  "duration": 430,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:18.770Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 91,
                    "column": 15
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:17.561Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 165,
                "column": 63
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:17.519Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
            "line": 11
          }
        },
        {
          "name": "Entonces el equipo tiene como miembros a \"qa.agent@chatwoot.test\" y \"qa.agent2@chatwoot.test\"",
          "outcome": "SUCCESS",
          "duration": 167,
          "children": [
            {
              "name": "Andrea ensures that los correos de los miembros del equipo does eventually contain \"qa.agent@chatwoot.test\"",
              "outcome": "SUCCESS",
              "duration": 59,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:19.239Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 170,
                "column": 12
              }
            },
            {
              "name": "Andrea ensures that los correos de los miembros del equipo does eventually contain \"qa.agent2@chatwoot.test\"",
              "outcome": "SUCCESS",
              "duration": 53,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:19.317Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 171,
                "column": 12
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:19.228Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
            "line": 12
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 3922,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1979,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1951,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1162,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:15.556Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 57,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:16.729Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:16.797Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 113,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:16.828Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 529,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:16.967Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:15.555Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:15.538Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
                "line": 10
              }
            },
            {
              "name": "Cuando ella crea un equipo nuevo con los agentes \"qa.agent@chatwoot.test\" y \"qa.agent2@chatwoot.test\"",
              "outcome": "SUCCESS",
              "duration": 1707,
              "children": [
                {
                  "name": "Andrea crea el equipo qa-pagos-1794783137522 con 2 agentes",
                  "outcome": "SUCCESS",
                  "duration": 1651,
                  "children": [
                    {
                      "name": "Andrea abre la página /settings/teams/new",
                      "outcome": "SUCCESS",
                      "duration": 503,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:17.562Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                        "line": 35,
                        "column": 31
                      }
                    },
                    {
                      "name": "Andrea enters \"qa-pagos-1794783137522\" into el nombre del equipo",
                      "outcome": "SUCCESS",
                      "duration": 474,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:18.087Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 89,
                        "column": 30
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Create team",
                      "outcome": "SUCCESS",
                      "duration": 188,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:18.572Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 90,
                        "column": 15
                      }
                    },
                    {
                      "name": "Andrea marca los agentes y los agrega",
                      "outcome": "SUCCESS",
                      "duration": 430,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:18.770Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 91,
                        "column": 15
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:17.561Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 165,
                    "column": 63
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:17.519Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
                "line": 11
              }
            },
            {
              "name": "Entonces el equipo tiene como miembros a \"qa.agent@chatwoot.test\" y \"qa.agent2@chatwoot.test\"",
              "outcome": "SUCCESS",
              "duration": 167,
              "children": [
                {
                  "name": "Andrea ensures that los correos de los miembros del equipo does eventually contain \"qa.agent@chatwoot.test\"",
                  "outcome": "SUCCESS",
                  "duration": 59,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:19.239Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 170,
                    "column": 12
                  }
                },
                {
                  "name": "Andrea ensures that los correos de los miembros del equipo does eventually contain \"qa.agent2@chatwoot.test\"",
                  "outcome": "SUCCESS",
                  "duration": 53,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:19.317Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 171,
                    "column": 12
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:19.228Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
                "line": 12
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero organizar a los agentes en equipos\nPara repartir el trabajo por área</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature:9"
    },
    {
      "name": "[CP-14-03] Un agente sin rol de administrador no puede crear equipos",
      "category": "[Juan Pablo Berrío] RF-14 Equipos y miembros",
      "outcome": "SUCCESS",
      "duration": 120,
      "startedAt": "2026-11-15T22:52:19.463Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
        "line": 15
      },
      "tags": [
        {
          "type": "capability",
          "name": "Juanpablo"
        },
        {
          "type": "feature",
          "name": "[Juan Pablo Berrío] RF-14 Equipos y miembros"
        },
        {
          "type": "tag",
          "name": "juanpabloberrio"
        },
        {
          "type": "tag",
          "name": "rf14"
        },
        {
          "type": "tag",
          "name": "cp-14-03"
        }
      ],
      "activities": [
        {
          "name": "Cuando Carlos intenta crear un equipo por la API",
          "outcome": "SUCCESS",
          "duration": 56,
          "children": [
            {
              "name": "Carlos llama POST a la API",
              "outcome": "SUCCESS",
              "duration": 39,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:19.467Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 176,
                "column": 43
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:19.464Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
            "line": 16
          }
        },
        {
          "name": "Entonces la API responde 401",
          "outcome": "SUCCESS",
          "duration": 15,
          "children": [
            {
              "name": "Carlos ensures that el código de la última respuesta does equal 401",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:19.524Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 33,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:19.521Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
            "line": 17
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 120,
          "activities": [
            {
              "name": "Cuando Carlos intenta crear un equipo por la API",
              "outcome": "SUCCESS",
              "duration": 56,
              "children": [
                {
                  "name": "Carlos llama POST a la API",
                  "outcome": "SUCCESS",
                  "duration": 39,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:19.467Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 176,
                    "column": 43
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:19.464Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
                "line": 16
              }
            },
            {
              "name": "Entonces la API responde 401",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [
                {
                  "name": "Carlos ensures that el código de la última respuesta does equal 401",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:19.524Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 33,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:19.521Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature",
                "line": 17
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero organizar a los agentes en equipos\nPara repartir el trabajo por área</p>\n",
      "cast": [
        {
          "name": "Carlos",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"i1v12V6Ss7uJogdGWewhnbad\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf14_equipos.feature:15"
    },
    {
      "name": "[CP-15-01] Ver las métricas de conversaciones de los últimos 7 días",
      "category": "[Juan Pablo Berrío] RF-15 Reportes de conversaciones y agentes",
      "outcome": "SUCCESS",
      "duration": 3571,
      "startedAt": "2026-11-15T22:52:19.585Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
        "line": 9
      },
      "tags": [
        {
          "type": "capability",
          "name": "Juanpablo"
        },
        {
          "type": "feature",
          "name": "[Juan Pablo Berrío] RF-15 Reportes de conversaciones y agentes"
        },
        {
          "type": "tag",
          "name": "juanpabloberrio"
        },
        {
          "type": "tag",
          "name": "rf15"
        },
        {
          "type": "tag",
          "name": "cp-15-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1845,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1816,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1048,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:19.604Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 45,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:20.669Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:20.726Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 108,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:20.753Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 528,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:20.877Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:19.603Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:19.586Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
            "line": 10
          }
        },
        {
          "name": "Y que Andrea recibió una conversación con el mensaje \"Conversación para el reporte\"",
          "outcome": "SUCCESS",
          "duration": 395,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"Conversación para el reporte\"",
              "outcome": "SUCCESS",
              "duration": 380,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:21.435Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 17,
                "column": 44
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:21.432Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
            "line": 11
          }
        },
        {
          "name": "Cuando ella abre el reporte de conversaciones",
          "outcome": "SUCCESS",
          "duration": 850,
          "children": [
            {
              "name": "Andrea abre la página /reports/conversation",
              "outcome": "SUCCESS",
              "duration": 835,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:21.829Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                "line": 35,
                "column": 31
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:21.828Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
            "line": 12
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Last 7 days\"",
          "outcome": "SUCCESS",
          "duration": 302,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Last 7 days\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 283,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:22.682Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:22.679Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
            "line": 13
          }
        },
        {
          "name": "Y ella ve el aviso \"Messages received\"",
          "outcome": "SUCCESS",
          "duration": 48,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Messages received\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 28,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:22.987Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:22.982Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
            "line": 14
          }
        },
        {
          "name": "Y ella ve el aviso \"Resolution Count\"",
          "outcome": "SUCCESS",
          "duration": 49,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Resolution Count\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 30,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:23.035Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:23.030Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
            "line": 15
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 3571,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1845,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1816,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1048,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:19.604Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 45,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:20.669Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:20.726Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 108,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:20.753Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 528,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:20.877Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:19.603Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:19.586Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
                "line": 10
              }
            },
            {
              "name": "Y que Andrea recibió una conversación con el mensaje \"Conversación para el reporte\"",
              "outcome": "SUCCESS",
              "duration": 395,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"Conversación para el reporte\"",
                  "outcome": "SUCCESS",
                  "duration": 380,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:21.435Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 17,
                    "column": 44
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:21.432Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
                "line": 11
              }
            },
            {
              "name": "Cuando ella abre el reporte de conversaciones",
              "outcome": "SUCCESS",
              "duration": 850,
              "children": [
                {
                  "name": "Andrea abre la página /reports/conversation",
                  "outcome": "SUCCESS",
                  "duration": 835,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:21.829Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                    "line": 35,
                    "column": 31
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:21.828Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
                "line": 12
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Last 7 days\"",
              "outcome": "SUCCESS",
              "duration": 302,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Last 7 days\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 283,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:22.682Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:22.679Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
                "line": 13
              }
            },
            {
              "name": "Y ella ve el aviso \"Messages received\"",
              "outcome": "SUCCESS",
              "duration": 48,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Messages received\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:22.987Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:22.982Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
                "line": 14
              }
            },
            {
              "name": "Y ella ve el aviso \"Resolution Count\"",
              "outcome": "SUCCESS",
              "duration": 49,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Resolution Count\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:23.035Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:23.030Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
                "line": 15
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero ver las métricas de atención\nPara medir el desempeño del equipo</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature:9"
    },
    {
      "name": "[CP-15-03] Un agente sin permisos no puede consultar los reportes",
      "category": "[Juan Pablo Berrío] RF-15 Reportes de conversaciones y agentes",
      "outcome": "SUCCESS",
      "duration": 207,
      "startedAt": "2026-11-15T22:52:23.160Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
        "line": 18
      },
      "tags": [
        {
          "type": "capability",
          "name": "Juanpablo"
        },
        {
          "type": "feature",
          "name": "[Juan Pablo Berrío] RF-15 Reportes de conversaciones y agentes"
        },
        {
          "type": "tag",
          "name": "juanpabloberrio"
        },
        {
          "type": "tag",
          "name": "rf15"
        },
        {
          "type": "tag",
          "name": "cp-15-03"
        }
      ],
      "activities": [
        {
          "name": "Cuando Carlos consulta el resumen de reportes por la API",
          "outcome": "SUCCESS",
          "duration": 141,
          "children": [
            {
              "name": "Carlos llama GET a la API",
              "outcome": "SUCCESS",
              "duration": 121,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:23.166Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                "line": 188,
                "column": 22
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:23.162Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
            "line": 19
          }
        },
        {
          "name": "Entonces la API responde 401",
          "outcome": "SUCCESS",
          "duration": 18,
          "children": [
            {
              "name": "Carlos ensures that el código de la última respuesta does equal 401",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:23.306Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 33,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:23.303Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
            "line": 20
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 207,
          "activities": [
            {
              "name": "Cuando Carlos consulta el resumen de reportes por la API",
              "outcome": "SUCCESS",
              "duration": 141,
              "children": [
                {
                  "name": "Carlos llama GET a la API",
                  "outcome": "SUCCESS",
                  "duration": 121,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:23.166Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/juanpablo.steps.ts",
                    "line": 188,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:23.162Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
                "line": 19
              }
            },
            {
              "name": "Entonces la API responde 401",
              "outcome": "SUCCESS",
              "duration": 18,
              "children": [
                {
                  "name": "Carlos ensures that el código de la última respuesta does equal 401",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:23.306Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 33,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:23.303Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature",
                "line": 20
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero ver las métricas de atención\nPara medir el desempeño del equipo</p>\n",
      "cast": [
        {
          "name": "Carlos",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"i1v12V6Ss7uJogdGWewhnbad\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/juanpablo/rf15_reportes.feature:18"
    },
    {
      "name": "[CP-01-01] Resolver una conversación abierta",
      "category": "[Luisa Espinal] RF-01 Cambio de estado de una conversación",
      "outcome": "SUCCESS",
      "duration": 5638,
      "startedAt": "2026-11-15T22:52:23.369Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
        "line": 13
      },
      "tags": [
        {
          "type": "capability",
          "name": "Luisa"
        },
        {
          "type": "feature",
          "name": "[Luisa Espinal] RF-01 Cambio de estado de una conversación"
        },
        {
          "type": "tag",
          "name": "luisaespinal"
        },
        {
          "type": "tag",
          "name": "rf01"
        },
        {
          "type": "tag",
          "name": "cp-01-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1867,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1836,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1100,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:23.386Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 48,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:24.503Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:24.564Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 83,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:24.594Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 523,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:24.689Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:23.386Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:23.371Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 9
          }
        },
        {
          "name": "Y que Andrea recibió una conversación con el mensaje \"Quiero cambiar mi plan\"",
          "outcome": "SUCCESS",
          "duration": 520,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"Quiero cambiar mi plan\"",
              "outcome": "SUCCESS",
              "duration": 495,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:25.245Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 17,
                "column": 44
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:25.240Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 10
          }
        },
        {
          "name": "Cuando ella abre la conversación",
          "outcome": "SUCCESS",
          "duration": 2267,
          "children": [
            {
              "name": "Andrea abre la conversación",
              "outcome": "SUCCESS",
              "duration": 2239,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:25.764Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                "line": 33,
                "column": 9
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:25.761Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 14
          }
        },
        {
          "name": "Y ella resuelve la conversación",
          "outcome": "SUCCESS",
          "duration": 123,
          "children": [
            {
              "name": "Andrea resuelve la conversación",
              "outcome": "SUCCESS",
              "duration": 102,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:28.031Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                "line": 39,
                "column": 9
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:28.029Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 15
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Conversation status changed\"",
          "outcome": "SUCCESS",
          "duration": 714,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Conversation status changed\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 689,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:28.158Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:28.153Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 16
          }
        },
        {
          "name": "Y la conversación queda en estado \"resolved\"",
          "outcome": "SUCCESS",
          "duration": 77,
          "children": [
            {
              "name": "Andrea ensures that el estado de la conversación does eventually equal \"resolved\"",
              "outcome": "SUCCESS",
              "duration": 56,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:28.871Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 29,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:28.868Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 17
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 5638,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1867,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1836,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1100,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:23.386Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 48,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:24.503Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:24.564Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 83,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:24.594Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 523,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:24.689Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:23.386Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:23.371Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 9
              }
            },
            {
              "name": "Y que Andrea recibió una conversación con el mensaje \"Quiero cambiar mi plan\"",
              "outcome": "SUCCESS",
              "duration": 520,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"Quiero cambiar mi plan\"",
                  "outcome": "SUCCESS",
                  "duration": 495,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:25.245Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 17,
                    "column": 44
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:25.240Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 10
              }
            },
            {
              "name": "Cuando ella abre la conversación",
              "outcome": "SUCCESS",
              "duration": 2267,
              "children": [
                {
                  "name": "Andrea abre la conversación",
                  "outcome": "SUCCESS",
                  "duration": 2239,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:25.764Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 33,
                    "column": 9
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:25.761Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 14
              }
            },
            {
              "name": "Y ella resuelve la conversación",
              "outcome": "SUCCESS",
              "duration": 123,
              "children": [
                {
                  "name": "Andrea resuelve la conversación",
                  "outcome": "SUCCESS",
                  "duration": 102,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:28.031Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 39,
                    "column": 9
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:28.029Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 15
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Conversation status changed\"",
              "outcome": "SUCCESS",
              "duration": 714,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Conversation status changed\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 689,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:28.158Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:28.153Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 16
              }
            },
            {
              "name": "Y la conversación queda en estado \"resolved\"",
              "outcome": "SUCCESS",
              "duration": 77,
              "children": [
                {
                  "name": "Andrea ensures that el estado de la conversación does eventually equal \"resolved\"",
                  "outcome": "SUCCESS",
                  "duration": 56,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:28.871Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 29,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:28.868Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 17
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero cambiar el estado de las conversaciones\nPara saber cuáles siguen pendientes de atención</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature:13"
    },
    {
      "name": "[CP-01-03] Un estado que no existe se rechaza y la conversación sigue abierta",
      "category": "[Luisa Espinal] RF-01 Cambio de estado de una conversación",
      "outcome": "SUCCESS",
      "duration": 3131,
      "startedAt": "2026-11-15T22:52:29.010Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
        "line": 20
      },
      "tags": [
        {
          "type": "capability",
          "name": "Luisa"
        },
        {
          "type": "feature",
          "name": "[Luisa Espinal] RF-01 Cambio de estado de una conversación"
        },
        {
          "type": "tag",
          "name": "luisaespinal"
        },
        {
          "type": "tag",
          "name": "rf01"
        },
        {
          "type": "tag",
          "name": "cp-01-03"
        },
        {
          "type": "tag",
          "name": "d-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 2241,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2208,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1431,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:29.032Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 51,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:30.483Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:30.557Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 105,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:30.590Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 522,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:30.707Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:29.032Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:29.012Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 9
          }
        },
        {
          "name": "Y que Andrea recibió una conversación con el mensaje \"Quiero cambiar mi plan\"",
          "outcome": "SUCCESS",
          "duration": 418,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"Quiero cambiar mi plan\"",
              "outcome": "SUCCESS",
              "duration": 401,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:31.260Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 17,
                "column": 44
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:31.255Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 10
          }
        },
        {
          "name": "Cuando ella intenta cambiar el estado de la conversación a \"cerrada\" por la API",
          "outcome": "SUCCESS",
          "duration": 78,
          "children": [
            {
              "name": "Andrea llama POST a la API",
              "outcome": "SUCCESS",
              "duration": 61,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:31.676Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 20,
                "column": 43
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:31.674Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 21
          }
        },
        {
          "name": "Entonces la API responde 422",
          "outcome": "SUCCESS",
          "duration": 30,
          "children": [
            {
              "name": "Andrea ensures that el código de la última respuesta does equal 422",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:31.762Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 33,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:31.753Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 22
          }
        },
        {
          "name": "Y la conversación queda en estado \"open\"",
          "outcome": "SUCCESS",
          "duration": 234,
          "children": [
            {
              "name": "Andrea ensures that el estado de la conversación does eventually equal \"open\"",
              "outcome": "SUCCESS",
              "duration": 214,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:31.793Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 29,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:31.785Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
            "line": 23
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 3131,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2241,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 2208,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1431,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:29.032Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 51,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:30.483Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:30.557Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 105,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:30.590Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 522,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:30.707Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:29.032Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:29.012Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 9
              }
            },
            {
              "name": "Y que Andrea recibió una conversación con el mensaje \"Quiero cambiar mi plan\"",
              "outcome": "SUCCESS",
              "duration": 418,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"Quiero cambiar mi plan\"",
                  "outcome": "SUCCESS",
                  "duration": 401,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:31.260Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 17,
                    "column": 44
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:31.255Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 10
              }
            },
            {
              "name": "Cuando ella intenta cambiar el estado de la conversación a \"cerrada\" por la API",
              "outcome": "SUCCESS",
              "duration": 78,
              "children": [
                {
                  "name": "Andrea llama POST a la API",
                  "outcome": "SUCCESS",
                  "duration": 61,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:31.676Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 20,
                    "column": 43
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:31.674Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 21
              }
            },
            {
              "name": "Entonces la API responde 422",
              "outcome": "SUCCESS",
              "duration": 30,
              "children": [
                {
                  "name": "Andrea ensures that el código de la última respuesta does equal 422",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:31.762Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 33,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:31.753Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 22
              }
            },
            {
              "name": "Y la conversación queda en estado \"open\"",
              "outcome": "SUCCESS",
              "duration": 234,
              "children": [
                {
                  "name": "Andrea ensures that el estado de la conversación does eventually equal \"open\"",
                  "outcome": "SUCCESS",
                  "duration": 214,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:31.793Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 29,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:31.785Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature",
                "line": 23
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero cambiar el estado de las conversaciones\nPara saber cuáles siguen pendientes de atención</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf01_cambio_estado.feature:20"
    },
    {
      "name": "[CP-02-01] Asignar la conversación a un agente de la bandeja",
      "category": "[Luisa Espinal] RF-02 Asignación de una conversación",
      "outcome": "SUCCESS",
      "duration": 6494,
      "startedAt": "2026-11-15T22:52:32.144Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
        "line": 13
      },
      "tags": [
        {
          "type": "capability",
          "name": "Luisa"
        },
        {
          "type": "feature",
          "name": "[Luisa Espinal] RF-02 Asignación de una conversación"
        },
        {
          "type": "tag",
          "name": "luisaespinal"
        },
        {
          "type": "tag",
          "name": "rf02"
        },
        {
          "type": "tag",
          "name": "cp-02-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1882,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1840,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1073,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:32.173Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:33.263Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:33.325Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 103,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:33.357Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 529,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:33.473Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:32.173Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:32.147Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 9
          }
        },
        {
          "name": "Y que Andrea recibió una conversación con el mensaje \"Necesito hablar con un agente\"",
          "outcome": "SUCCESS",
          "duration": 380,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"Necesito hablar con un agente\"",
              "outcome": "SUCCESS",
              "duration": 352,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:34.034Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 17,
                "column": 44
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:34.031Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 10
          }
        },
        {
          "name": "Cuando ella abre la conversación",
          "outcome": "SUCCESS",
          "duration": 3425,
          "children": [
            {
              "name": "Andrea abre la conversación",
              "outcome": "SUCCESS",
              "duration": 3412,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:34.413Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                "line": 33,
                "column": 9
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:34.412Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 14
          }
        },
        {
          "name": "Y ella asigna la conversación a \"QA Agente\"",
          "outcome": "SUCCESS",
          "duration": 218,
          "children": [
            {
              "name": "Andrea asigna la conversación a QA Agente",
              "outcome": "SUCCESS",
              "duration": 198,
              "children": [
                {
                  "name": "Andrea abre las acciones de la conversación",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:37.842Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 43,
                    "column": 9
                  }
                },
                {
                  "name": "Andrea elige \"QA Agente\" en Assigned Agent",
                  "outcome": "SUCCESS",
                  "duration": 140,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:37.889Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 56,
                    "column": 9
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:37.842Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 33,
                "column": 48
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:37.838Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 15
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Conversation Assignee changed\"",
          "outcome": "SUCCESS",
          "duration": 264,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Conversation Assignee changed\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 236,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:38.063Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:38.057Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 16
          }
        },
        {
          "name": "Y el agente asignado es \"QA Agente\"",
          "outcome": "SUCCESS",
          "duration": 233,
          "children": [
            {
              "name": "Andrea ensures that el agente asignado does eventually equal \"QA Agente\"",
              "outcome": "SUCCESS",
              "duration": 213,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:38.326Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 43,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:38.322Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 17
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 6494,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1882,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1840,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1073,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:32.173Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 44,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:33.263Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:33.325Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 103,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:33.357Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 529,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:33.473Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:32.173Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:32.147Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 9
              }
            },
            {
              "name": "Y que Andrea recibió una conversación con el mensaje \"Necesito hablar con un agente\"",
              "outcome": "SUCCESS",
              "duration": 380,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"Necesito hablar con un agente\"",
                  "outcome": "SUCCESS",
                  "duration": 352,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:34.034Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 17,
                    "column": 44
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:34.031Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 10
              }
            },
            {
              "name": "Cuando ella abre la conversación",
              "outcome": "SUCCESS",
              "duration": 3425,
              "children": [
                {
                  "name": "Andrea abre la conversación",
                  "outcome": "SUCCESS",
                  "duration": 3412,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:34.413Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 33,
                    "column": 9
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:34.412Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 14
              }
            },
            {
              "name": "Y ella asigna la conversación a \"QA Agente\"",
              "outcome": "SUCCESS",
              "duration": 218,
              "children": [
                {
                  "name": "Andrea asigna la conversación a QA Agente",
                  "outcome": "SUCCESS",
                  "duration": 198,
                  "children": [
                    {
                      "name": "Andrea abre las acciones de la conversación",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:37.842Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                        "line": 43,
                        "column": 9
                      }
                    },
                    {
                      "name": "Andrea elige \"QA Agente\" en Assigned Agent",
                      "outcome": "SUCCESS",
                      "duration": 140,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:37.889Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                        "line": 56,
                        "column": 9
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:37.842Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 33,
                    "column": 48
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:37.838Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 15
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Conversation Assignee changed\"",
              "outcome": "SUCCESS",
              "duration": 264,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Conversation Assignee changed\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 236,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:38.063Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:38.057Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 16
              }
            },
            {
              "name": "Y el agente asignado es \"QA Agente\"",
              "outcome": "SUCCESS",
              "duration": 233,
              "children": [
                {
                  "name": "Andrea ensures that el agente asignado does eventually equal \"QA Agente\"",
                  "outcome": "SUCCESS",
                  "duration": 213,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:38.326Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 43,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:38.322Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 17
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero asignar cada conversación a un agente\nPara que haya un responsable de responderla</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature:13"
    },
    {
      "name": "[CP-02-03] Un agente de otra cuenta se rechaza y se conserva el asignado",
      "category": "[Luisa Espinal] RF-02 Asignación de una conversación",
      "outcome": "SUCCESS",
      "duration": 4221,
      "startedAt": "2026-11-15T22:52:38.643Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
        "line": 20
      },
      "tags": [
        {
          "type": "capability",
          "name": "Luisa"
        },
        {
          "type": "feature",
          "name": "[Luisa Espinal] RF-02 Asignación de una conversación"
        },
        {
          "type": "tag",
          "name": "luisaespinal"
        },
        {
          "type": "tag",
          "name": "rf02"
        },
        {
          "type": "tag",
          "name": "cp-02-03"
        },
        {
          "type": "tag",
          "name": "d-02"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1889,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1839,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1087,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:38.680Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:39.784Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:39.849Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 79,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:39.880Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 529,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:39.973Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:38.680Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:38.646Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 9
          }
        },
        {
          "name": "Y que Andrea recibió una conversación con el mensaje \"Necesito hablar con un agente\"",
          "outcome": "SUCCESS",
          "duration": 478,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"Necesito hablar con un agente\"",
              "outcome": "SUCCESS",
              "duration": 445,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:40.544Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 17,
                "column": 44
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:40.537Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 10
          }
        },
        {
          "name": "Dado que la conversación está asignada a Carlos",
          "outcome": "SUCCESS",
          "duration": 965,
          "children": [
            {
              "name": "Andrea asigna la conversación a Carlos por la API",
              "outcome": "SUCCESS",
              "duration": 949,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:41.018Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 26,
                "column": 17
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:41.016Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 21
          }
        },
        {
          "name": "Cuando ella intenta asignar la conversación a un agente de otra cuenta",
          "outcome": "SUCCESS",
          "duration": 433,
          "children": [
            {
              "name": "Andrea llama POST a la API",
              "outcome": "SUCCESS",
              "duration": 418,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:41.983Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 38,
                "column": 22
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:41.981Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 22
          }
        },
        {
          "name": "Entonces la API responde 422",
          "outcome": "SUCCESS",
          "duration": 29,
          "children": [
            {
              "name": "Andrea ensures that el código de la última respuesta does equal 422",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:42.419Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 33,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:42.416Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 23
          }
        },
        {
          "name": "Y el agente asignado es \"QA Agente\"",
          "outcome": "SUCCESS",
          "duration": 340,
          "children": [
            {
              "name": "Andrea ensures that el agente asignado does eventually equal \"QA Agente\"",
              "outcome": "SUCCESS",
              "duration": 317,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:42.449Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 43,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:42.446Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
            "line": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 4221,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1889,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1839,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1087,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:38.680Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 43,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:39.784Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:39.849Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 79,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:39.880Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 529,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:39.973Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:38.680Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:38.646Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 9
              }
            },
            {
              "name": "Y que Andrea recibió una conversación con el mensaje \"Necesito hablar con un agente\"",
              "outcome": "SUCCESS",
              "duration": 478,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"Necesito hablar con un agente\"",
                  "outcome": "SUCCESS",
                  "duration": 445,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:40.544Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 17,
                    "column": 44
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:40.537Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 10
              }
            },
            {
              "name": "Dado que la conversación está asignada a Carlos",
              "outcome": "SUCCESS",
              "duration": 965,
              "children": [
                {
                  "name": "Andrea asigna la conversación a Carlos por la API",
                  "outcome": "SUCCESS",
                  "duration": 949,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:41.018Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 26,
                    "column": 17
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:41.016Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 21
              }
            },
            {
              "name": "Cuando ella intenta asignar la conversación a un agente de otra cuenta",
              "outcome": "SUCCESS",
              "duration": 433,
              "children": [
                {
                  "name": "Andrea llama POST a la API",
                  "outcome": "SUCCESS",
                  "duration": 418,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:41.983Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 38,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:41.981Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 22
              }
            },
            {
              "name": "Entonces la API responde 422",
              "outcome": "SUCCESS",
              "duration": 29,
              "children": [
                {
                  "name": "Andrea ensures that el código de la última respuesta does equal 422",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:42.419Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 33,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:42.416Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 23
              }
            },
            {
              "name": "Y el agente asignado es \"QA Agente\"",
              "outcome": "SUCCESS",
              "duration": 340,
              "children": [
                {
                  "name": "Andrea ensures that el agente asignado does eventually equal \"QA Agente\"",
                  "outcome": "SUCCESS",
                  "duration": 317,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:42.449Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 43,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:42.446Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature",
                "line": 24
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero asignar cada conversación a un agente\nPara que haya un responsable de responderla</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf02_asignacion.feature:20"
    },
    {
      "name": "[CP-03-01] Enviar una respuesta pública al cliente",
      "category": "[Luisa Espinal] RF-03 Envío de mensajes y notas privadas",
      "outcome": "SUCCESS",
      "duration": 6045,
      "startedAt": "2026-11-15T22:52:42.868Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
        "line": 14
      },
      "tags": [
        {
          "type": "capability",
          "name": "Luisa"
        },
        {
          "type": "feature",
          "name": "[Luisa Espinal] RF-03 Envío de mensajes y notas privadas"
        },
        {
          "type": "tag",
          "name": "luisaespinal"
        },
        {
          "type": "tag",
          "name": "rf03"
        },
        {
          "type": "tag",
          "name": "cp-03-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1982,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1949,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1174,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:42.890Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:44.081Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:44.139Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 100,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:44.172Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 538,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:44.290Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:42.890Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:42.870Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 9
          }
        },
        {
          "name": "Y que Andrea recibió una conversación con el mensaje \"¿Tienen envíos a Medellín?\"",
          "outcome": "SUCCESS",
          "duration": 365,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"¿Tienen envíos a Medellín?\"",
              "outcome": "SUCCESS",
              "duration": 343,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:44.860Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 17,
                "column": 44
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:44.854Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 10
          }
        },
        {
          "name": "Cuando ella abre la conversación",
          "outcome": "SUCCESS",
          "duration": 2861,
          "children": [
            {
              "name": "Andrea abre la conversación",
              "outcome": "SUCCESS",
              "duration": 2845,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:45.224Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                "line": 33,
                "column": 9
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:45.221Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 11
          }
        },
        {
          "name": "Cuando ella responde \"Sí, enviamos a todo el país\"",
          "outcome": "SUCCESS",
          "duration": 243,
          "children": [
            {
              "name": "Andrea responde \"Sí, enviamos a todo el país\"",
              "outcome": "SUCCESS",
              "duration": 213,
              "children": [
                {
                  "name": "Andrea enters \"Sí, enviamos a todo el país\" into el editor de respuesta",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:48.097Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 76,
                    "column": 28
                  }
                },
                {
                  "name": "Andrea clicks on el botón Send",
                  "outcome": "SUCCESS",
                  "duration": 151,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:48.139Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 77,
                    "column": 13
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:48.096Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 48,
                "column": 32
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:48.083Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 15
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Sí, enviamos a todo el país\"",
          "outcome": "SUCCESS",
          "duration": 61,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Sí, enviamos a todo el país\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 35,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:48.333Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:48.327Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 16
          }
        },
        {
          "name": "Y el último mensaje de la conversación es \"Sí, enviamos a todo el país\" y es público",
          "outcome": "SUCCESS",
          "duration": 447,
          "children": [
            {
              "name": "Andrea ensures that el último mensaje de la conversación does eventually equal { content: \"Sí, enviamos a todo el país\", private: false }",
              "outcome": "SUCCESS",
              "duration": 434,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:48.392Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 57,
                "column": 12
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:48.389Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 17
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 6045,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1982,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1949,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1174,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:42.890Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 42,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:44.081Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:44.139Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 100,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:44.172Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 538,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:44.290Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:42.890Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:42.870Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 9
              }
            },
            {
              "name": "Y que Andrea recibió una conversación con el mensaje \"¿Tienen envíos a Medellín?\"",
              "outcome": "SUCCESS",
              "duration": 365,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"¿Tienen envíos a Medellín?\"",
                  "outcome": "SUCCESS",
                  "duration": 343,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:44.860Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 17,
                    "column": 44
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:44.854Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 10
              }
            },
            {
              "name": "Cuando ella abre la conversación",
              "outcome": "SUCCESS",
              "duration": 2861,
              "children": [
                {
                  "name": "Andrea abre la conversación",
                  "outcome": "SUCCESS",
                  "duration": 2845,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:45.224Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 33,
                    "column": 9
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:45.221Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 11
              }
            },
            {
              "name": "Cuando ella responde \"Sí, enviamos a todo el país\"",
              "outcome": "SUCCESS",
              "duration": 243,
              "children": [
                {
                  "name": "Andrea responde \"Sí, enviamos a todo el país\"",
                  "outcome": "SUCCESS",
                  "duration": 213,
                  "children": [
                    {
                      "name": "Andrea enters \"Sí, enviamos a todo el país\" into el editor de respuesta",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:48.097Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                        "line": 76,
                        "column": 28
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Send",
                      "outcome": "SUCCESS",
                      "duration": 151,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:48.139Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                        "line": 77,
                        "column": 13
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:48.096Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 48,
                    "column": 32
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:48.083Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 15
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Sí, enviamos a todo el país\"",
              "outcome": "SUCCESS",
              "duration": 61,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Sí, enviamos a todo el país\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:48.333Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:48.327Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 16
              }
            },
            {
              "name": "Y el último mensaje de la conversación es \"Sí, enviamos a todo el país\" y es público",
              "outcome": "SUCCESS",
              "duration": 447,
              "children": [
                {
                  "name": "Andrea ensures that el último mensaje de la conversación does eventually equal { content: \"Sí, enviamos a todo el país\", private: false }",
                  "outcome": "SUCCESS",
                  "duration": 434,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:48.392Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 57,
                    "column": 12
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:48.389Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 17
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como agente de soporte\nQuiero responder al cliente y dejar notas internas\nPara atenderlo y coordinarme con mi equipo</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature:14"
    },
    {
      "name": "[CP-03-02] Agregar una nota privada que solo ven los agentes",
      "category": "[Luisa Espinal] RF-03 Envío de mensajes y notas privadas",
      "outcome": "SUCCESS",
      "duration": 5952,
      "startedAt": "2026-11-15T22:52:48.919Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
        "line": 20
      },
      "tags": [
        {
          "type": "capability",
          "name": "Luisa"
        },
        {
          "type": "feature",
          "name": "[Luisa Espinal] RF-03 Envío de mensajes y notas privadas"
        },
        {
          "type": "tag",
          "name": "luisaespinal"
        },
        {
          "type": "tag",
          "name": "rf03"
        },
        {
          "type": "tag",
          "name": "cp-03-02"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1881,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1814,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1061,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:48.978Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:50.053Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:50.107Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 112,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:50.132Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 522,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:50.257Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:48.978Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:48.925Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 9
          }
        },
        {
          "name": "Y que Andrea recibió una conversación con el mensaje \"¿Tienen envíos a Medellín?\"",
          "outcome": "SUCCESS",
          "duration": 399,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"¿Tienen envíos a Medellín?\"",
              "outcome": "SUCCESS",
              "duration": 381,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:50.815Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 17,
                "column": 44
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:50.810Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 10
          }
        },
        {
          "name": "Cuando ella abre la conversación",
          "outcome": "SUCCESS",
          "duration": 2936,
          "children": [
            {
              "name": "Andrea abre la conversación",
              "outcome": "SUCCESS",
              "duration": 2920,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:51.212Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                "line": 33,
                "column": 9
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:51.210Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 11
          }
        },
        {
          "name": "Cuando ella agrega la nota privada \"Cliente frecuente, ofrecer descuento\"",
          "outcome": "SUCCESS",
          "duration": 408,
          "children": [
            {
              "name": "Andrea agrega la nota privada \"Cliente frecuente, ofrecer descuento\"",
              "outcome": "SUCCESS",
              "duration": 371,
              "children": [
                {
                  "name": "Andrea clicks on el botón Private Note",
                  "outcome": "SUCCESS",
                  "duration": 179,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:54.168Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 81,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea enters \"Cliente frecuente, ofrecer descuento\" into el editor de respuesta",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:54.363Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 82,
                    "column": 28
                  }
                },
                {
                  "name": "Andrea clicks on el botón Add Note",
                  "outcome": "SUCCESS",
                  "duration": 129,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:54.390Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 83,
                    "column": 13
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:54.167Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 52,
                "column": 32
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:54.147Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 21
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Cliente frecuente, ofrecer descuento\"",
          "outcome": "SUCCESS",
          "duration": 66,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Cliente frecuente, ofrecer descuento\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 41,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:54.561Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:54.555Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 22
          }
        },
        {
          "name": "Y el último mensaje de la conversación es \"Cliente frecuente, ofrecer descuento\" y es privado",
          "outcome": "SUCCESS",
          "duration": 184,
          "children": [
            {
              "name": "Andrea ensures that el último mensaje de la conversación does eventually equal { content: \"Cliente frecuente, ofrecer descuento\", private: true }",
              "outcome": "SUCCESS",
              "duration": 156,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:54.627Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 57,
                "column": 12
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:54.621Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
            "line": 23
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 5952,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1881,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1814,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1061,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:48.978Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 42,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:50.053Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:50.107Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 112,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:50.132Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 522,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:50.257Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:48.978Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:48.925Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 9
              }
            },
            {
              "name": "Y que Andrea recibió una conversación con el mensaje \"¿Tienen envíos a Medellín?\"",
              "outcome": "SUCCESS",
              "duration": 399,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"¿Tienen envíos a Medellín?\"",
                  "outcome": "SUCCESS",
                  "duration": 381,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:50.815Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 17,
                    "column": 44
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:50.810Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 10
              }
            },
            {
              "name": "Cuando ella abre la conversación",
              "outcome": "SUCCESS",
              "duration": 2936,
              "children": [
                {
                  "name": "Andrea abre la conversación",
                  "outcome": "SUCCESS",
                  "duration": 2920,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:51.212Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 33,
                    "column": 9
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:51.210Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 11
              }
            },
            {
              "name": "Cuando ella agrega la nota privada \"Cliente frecuente, ofrecer descuento\"",
              "outcome": "SUCCESS",
              "duration": 408,
              "children": [
                {
                  "name": "Andrea agrega la nota privada \"Cliente frecuente, ofrecer descuento\"",
                  "outcome": "SUCCESS",
                  "duration": 371,
                  "children": [
                    {
                      "name": "Andrea clicks on el botón Private Note",
                      "outcome": "SUCCESS",
                      "duration": 179,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:54.168Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                        "line": 81,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea enters \"Cliente frecuente, ofrecer descuento\" into el editor de respuesta",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:54.363Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                        "line": 82,
                        "column": 28
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Add Note",
                      "outcome": "SUCCESS",
                      "duration": 129,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:54.390Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                        "line": 83,
                        "column": 13
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:54.167Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 52,
                    "column": 32
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:54.147Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 21
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Cliente frecuente, ofrecer descuento\"",
              "outcome": "SUCCESS",
              "duration": 66,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Cliente frecuente, ofrecer descuento\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 41,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:54.561Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:54.555Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 22
              }
            },
            {
              "name": "Y el último mensaje de la conversación es \"Cliente frecuente, ofrecer descuento\" y es privado",
              "outcome": "SUCCESS",
              "duration": 184,
              "children": [
                {
                  "name": "Andrea ensures that el último mensaje de la conversación does eventually equal { content: \"Cliente frecuente, ofrecer descuento\", private: true }",
                  "outcome": "SUCCESS",
                  "duration": 156,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:54.627Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 57,
                    "column": 12
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:54.621Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature",
                "line": 23
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como agente de soporte\nQuiero responder al cliente y dejar notas internas\nPara atenderlo y coordinarme con mi equipo</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf03_mensajes_notas.feature:20"
    },
    {
      "name": "[CP-04-01] Crear una etiqueta y aplicarla a una conversación",
      "category": "[Luisa Espinal] RF-04 Gestión de etiquetas",
      "outcome": "SUCCESS",
      "duration": 8750,
      "startedAt": "2026-11-15T22:52:54.875Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
        "line": 12
      },
      "tags": [
        {
          "type": "capability",
          "name": "Luisa"
        },
        {
          "type": "feature",
          "name": "[Luisa Espinal] RF-04 Gestión de etiquetas"
        },
        {
          "type": "tag",
          "name": "luisaespinal"
        },
        {
          "type": "tag",
          "name": "rf04"
        },
        {
          "type": "tag",
          "name": "cp-04-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 2446,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2404,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1111,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:54.903Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 41,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:56.031Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:56.084Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 114,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:56.115Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 1038,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:56.255Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:54.903Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:54.877Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 9
          }
        },
        {
          "name": "Dado que Andrea recibió una conversación con el mensaje \"Tengo un problema con el soporte\"",
          "outcome": "SUCCESS",
          "duration": 1081,
          "children": [
            {
              "name": "Andrea recibe una conversación con el mensaje \"Tengo un problema con el soporte\"",
              "outcome": "SUCCESS",
              "duration": 1067,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:57.326Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 17,
                "column": 44
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:57.324Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 13
          }
        },
        {
          "name": "Cuando ella crea una etiqueta nueva que empieza por \"qa-soporte\"",
          "outcome": "SUCCESS",
          "duration": 1739,
          "children": [
            {
              "name": "Andrea anota la etiqueta qa-soporte-1794783178408",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:52:58.426Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 65,
                "column": 17
              }
            },
            {
              "name": "Andrea crea la etiqueta qa-soporte-1794783178408",
              "outcome": "SUCCESS",
              "duration": 1691,
              "children": [
                {
                  "name": "Andrea abre la página /settings/labels/list",
                  "outcome": "SUCCESS",
                  "duration": 930,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:58.440Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                    "line": 35,
                    "column": 31
                  }
                },
                {
                  "name": "Andrea clicks on el botón Add label",
                  "outcome": "SUCCESS",
                  "duration": 481,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:59.387Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 14,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea enters \"qa-soporte-1794783178408\" into el nombre de la etiqueta",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:59.881Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 15,
                    "column": 29
                  }
                },
                {
                  "name": "Andrea clicks on el botón Create",
                  "outcome": "SUCCESS",
                  "duration": 199,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:59.912Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 16,
                    "column": 13
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:58.439Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 66,
                "column": 17
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:52:58.406Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 14
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Label added successfully\"",
          "outcome": "SUCCESS",
          "duration": 295,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Label added successfully\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 269,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:53:00.150Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:00.146Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 15
          }
        },
        {
          "name": "Cuando ella abre la conversación",
          "outcome": "SUCCESS",
          "duration": 2329,
          "children": [
            {
              "name": "Andrea abre la conversación",
              "outcome": "SUCCESS",
              "duration": 2316,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:53:00.443Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                "line": 33,
                "column": 9
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:00.442Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 16
          }
        },
        {
          "name": "Y ella aplica esa etiqueta a la conversación",
          "outcome": "SUCCESS",
          "duration": 300,
          "children": [
            {
              "name": "Andrea aplica la etiqueta qa-soporte-1794783178408 a la conversación",
              "outcome": "SUCCESS",
              "duration": 276,
              "children": [
                {
                  "name": "Andrea abre las acciones de la conversación",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:02.778Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 43,
                    "column": 9
                  }
                },
                {
                  "name": "Andrea busca y elige la etiqueta qa-soporte-1794783178408",
                  "outcome": "SUCCESS",
                  "duration": 190,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:02.841Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 24,
                    "column": 13
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:02.778Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 71,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:02.772Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 17
          }
        },
        {
          "name": "Entonces la conversación tiene esa etiqueta",
          "outcome": "SUCCESS",
          "duration": 481,
          "children": [
            {
              "name": "Andrea ensures that las etiquetas de la conversación does eventually contain \"qa-soporte-1794783178408\"",
              "outcome": "SUCCESS",
              "duration": 459,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:53:03.079Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 80,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:03.073Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 18
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 8750,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2446,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 2404,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1111,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:54.903Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 41,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:56.031Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:56.084Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 114,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:56.115Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 1038,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:56.255Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:54.903Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:54.877Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 9
              }
            },
            {
              "name": "Dado que Andrea recibió una conversación con el mensaje \"Tengo un problema con el soporte\"",
              "outcome": "SUCCESS",
              "duration": 1081,
              "children": [
                {
                  "name": "Andrea recibe una conversación con el mensaje \"Tengo un problema con el soporte\"",
                  "outcome": "SUCCESS",
                  "duration": 1067,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:57.326Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 17,
                    "column": 44
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:57.324Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 13
              }
            },
            {
              "name": "Cuando ella crea una etiqueta nueva que empieza por \"qa-soporte\"",
              "outcome": "SUCCESS",
              "duration": 1739,
              "children": [
                {
                  "name": "Andrea anota la etiqueta qa-soporte-1794783178408",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:52:58.426Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 65,
                    "column": 17
                  }
                },
                {
                  "name": "Andrea crea la etiqueta qa-soporte-1794783178408",
                  "outcome": "SUCCESS",
                  "duration": 1691,
                  "children": [
                    {
                      "name": "Andrea abre la página /settings/labels/list",
                      "outcome": "SUCCESS",
                      "duration": 930,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:58.440Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                        "line": 35,
                        "column": 31
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Add label",
                      "outcome": "SUCCESS",
                      "duration": 481,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:59.387Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 14,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea enters \"qa-soporte-1794783178408\" into el nombre de la etiqueta",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:59.881Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 15,
                        "column": 29
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Create",
                      "outcome": "SUCCESS",
                      "duration": 199,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:52:59.912Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 16,
                        "column": 13
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:52:58.439Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 66,
                    "column": 17
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:52:58.406Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 14
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Label added successfully\"",
              "outcome": "SUCCESS",
              "duration": 295,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Label added successfully\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 269,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:00.150Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:00.146Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 15
              }
            },
            {
              "name": "Cuando ella abre la conversación",
              "outcome": "SUCCESS",
              "duration": 2329,
              "children": [
                {
                  "name": "Andrea abre la conversación",
                  "outcome": "SUCCESS",
                  "duration": 2316,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:00.443Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                    "line": 33,
                    "column": 9
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:00.442Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 16
              }
            },
            {
              "name": "Y ella aplica esa etiqueta a la conversación",
              "outcome": "SUCCESS",
              "duration": 300,
              "children": [
                {
                  "name": "Andrea aplica la etiqueta qa-soporte-1794783178408 a la conversación",
                  "outcome": "SUCCESS",
                  "duration": 276,
                  "children": [
                    {
                      "name": "Andrea abre las acciones de la conversación",
                      "outcome": "SUCCESS",
                      "duration": 42,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:02.778Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Conversations.ts",
                        "line": 43,
                        "column": 9
                      }
                    },
                    {
                      "name": "Andrea busca y elige la etiqueta qa-soporte-1794783178408",
                      "outcome": "SUCCESS",
                      "duration": 190,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:02.841Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 24,
                        "column": 13
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:53:02.778Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 71,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:02.772Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 17
              }
            },
            {
              "name": "Entonces la conversación tiene esa etiqueta",
              "outcome": "SUCCESS",
              "duration": 481,
              "children": [
                {
                  "name": "Andrea ensures that las etiquetas de la conversación does eventually contain \"qa-soporte-1794783178408\"",
                  "outcome": "SUCCESS",
                  "duration": 459,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:03.079Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 80,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:03.073Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 18
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero crear etiquetas y aplicarlas a las conversaciones\nPara clasificar los casos por tema</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature:12"
    },
    {
      "name": "[CP-04-03] Una etiqueta con símbolos se rechaza",
      "category": "[Luisa Espinal] RF-04 Gestión de etiquetas",
      "outcome": "SUCCESS",
      "duration": 3654,
      "startedAt": "2026-11-15T22:53:03.628Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
        "line": 21
      },
      "tags": [
        {
          "type": "capability",
          "name": "Luisa"
        },
        {
          "type": "feature",
          "name": "[Luisa Espinal] RF-04 Gestión de etiquetas"
        },
        {
          "type": "tag",
          "name": "luisaespinal"
        },
        {
          "type": "tag",
          "name": "rf04"
        },
        {
          "type": "tag",
          "name": "cp-04-03"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1897,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1859,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1073,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:03.656Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 46,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:04.745Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:04.812Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 101,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:04.844Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 535,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:04.968Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:03.655Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:03.630Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 9
          }
        },
        {
          "name": "Cuando ella intenta crear la etiqueta \"qa!\"",
          "outcome": "SUCCESS",
          "duration": 1418,
          "children": [
            {
              "name": "Andrea crea la etiqueta qa!",
              "outcome": "SUCCESS",
              "duration": 1374,
              "children": [
                {
                  "name": "Andrea abre la página /settings/labels/list",
                  "outcome": "SUCCESS",
                  "duration": 456,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:05.559Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                    "line": 35,
                    "column": 31
                  }
                },
                {
                  "name": "Andrea clicks on el botón Add label",
                  "outcome": "SUCCESS",
                  "duration": 558,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:06.039Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 14,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea enters \"qa!\" into el nombre de la etiqueta",
                  "outcome": "SUCCESS",
                  "duration": 65,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:06.610Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 15,
                    "column": 29
                  }
                },
                {
                  "name": "Andrea clicks on el botón Create",
                  "outcome": "SUCCESS",
                  "duration": 216,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:06.701Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 16,
                    "column": 13
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:05.558Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 75,
                "column": 38
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:05.529Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 22
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Title is invalid\"",
          "outcome": "SUCCESS",
          "duration": 99,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Title is invalid\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 81,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:53:06.952Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:06.947Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 23
          }
        },
        {
          "name": "Y la etiqueta \"qa!\" no existe en la cuenta",
          "outcome": "SUCCESS",
          "duration": 146,
          "children": [
            {
              "name": "Andrea ensures that las etiquetas de la cuenta does not contain \"qa!\"",
              "outcome": "SUCCESS",
              "duration": 123,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:53:07.059Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 84,
                "column": 49
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:07.048Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
            "line": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 3654,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1897,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1859,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1073,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:03.656Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 46,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:04.745Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:04.812Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 101,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:04.844Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 535,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:04.968Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:53:03.655Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:03.630Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 9
              }
            },
            {
              "name": "Cuando ella intenta crear la etiqueta \"qa!\"",
              "outcome": "SUCCESS",
              "duration": 1418,
              "children": [
                {
                  "name": "Andrea crea la etiqueta qa!",
                  "outcome": "SUCCESS",
                  "duration": 1374,
                  "children": [
                    {
                      "name": "Andrea abre la página /settings/labels/list",
                      "outcome": "SUCCESS",
                      "duration": 456,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:05.559Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                        "line": 35,
                        "column": 31
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Add label",
                      "outcome": "SUCCESS",
                      "duration": 558,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:06.039Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 14,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea enters \"qa!\" into el nombre de la etiqueta",
                      "outcome": "SUCCESS",
                      "duration": 65,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:06.610Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 15,
                        "column": 29
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón Create",
                      "outcome": "SUCCESS",
                      "duration": 216,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:06.701Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 16,
                        "column": 13
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:53:05.558Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 75,
                    "column": 38
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:05.529Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 22
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Title is invalid\"",
              "outcome": "SUCCESS",
              "duration": 99,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Title is invalid\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 81,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:06.952Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:06.947Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 23
              }
            },
            {
              "name": "Y la etiqueta \"qa!\" no existe en la cuenta",
              "outcome": "SUCCESS",
              "duration": 146,
              "children": [
                {
                  "name": "Andrea ensures that las etiquetas de la cuenta does not contain \"qa!\"",
                  "outcome": "SUCCESS",
                  "duration": 123,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:07.059Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 84,
                    "column": 49
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:07.048Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature",
                "line": 24
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como administradora de la cuenta\nQuiero crear etiquetas y aplicarlas a las conversaciones\nPara clasificar los casos por tema</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf04_etiquetas.feature:21"
    },
    {
      "name": "[CP-05-01] Encontrar una conversación por el texto de un mensaje",
      "category": "[Luisa Espinal] RF-05 Búsqueda global",
      "outcome": "SUCCESS",
      "duration": 4305,
      "startedAt": "2026-11-15T22:53:07.288Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
        "line": 12
      },
      "tags": [
        {
          "type": "capability",
          "name": "Luisa"
        },
        {
          "type": "feature",
          "name": "[Luisa Espinal] RF-05 Búsqueda global"
        },
        {
          "type": "tag",
          "name": "luisaespinal"
        },
        {
          "type": "tag",
          "name": "rf05"
        },
        {
          "type": "tag",
          "name": "cp-05-01"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 2056,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1966,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1176,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:07.371Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 50,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:08.563Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:08.625Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 106,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:08.655Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 534,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:08.780Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:07.370Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:07.295Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
            "line": 9
          }
        },
        {
          "name": "Dado que Andrea recibió una conversación con una palabra única en el mensaje",
          "outcome": "SUCCESS",
          "duration": 468,
          "children": [
            {
              "name": "Andrea anota la palabra reembolso1794783189356",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:53:09.362Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 91,
                "column": 17
              }
            },
            {
              "name": "Andrea recibe una conversación con el mensaje \"Quiero un reembolso1794783189356 de mi compra\"",
              "outcome": "SUCCESS",
              "duration": 428,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:53:09.376Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 92,
                "column": 23
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:09.353Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
            "line": 13
          }
        },
        {
          "name": "Cuando ella busca esa palabra",
          "outcome": "SUCCESS",
          "duration": 922,
          "children": [
            {
              "name": "Andrea busca \"reembolso1794783189356\"",
              "outcome": "SUCCESS",
              "duration": 872,
              "children": [
                {
                  "name": "Andrea abre la página /search",
                  "outcome": "SUCCESS",
                  "duration": 500,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:09.859Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                    "line": 35,
                    "column": 31
                  }
                },
                {
                  "name": "Andrea enters \"reembolso1794783189356\" into el buscador global",
                  "outcome": "SUCCESS",
                  "duration": 283,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:10.382Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 37,
                    "column": 26
                  }
                },
                {
                  "name": "Andrea presses key Enter in el buscador global",
                  "outcome": "SUCCESS",
                  "duration": 40,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:10.676Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 38,
                    "column": 28
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:09.858Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 97,
                "column": 35
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:09.822Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
            "line": 14
          }
        },
        {
          "name": "Entonces ella ve el aviso \"Messages (1)\"",
          "outcome": "SUCCESS",
          "duration": 707,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Messages (1)\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 673,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:53:10.759Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:10.746Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
            "line": 15
          }
        },
        {
          "name": "Y ella ve el aviso \"Cliente Búsqueda wrote:\"",
          "outcome": "SUCCESS",
          "duration": 61,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"Cliente Búsqueda wrote:\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:53:11.458Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:11.454Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
            "line": 16
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 4305,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 2056,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1966,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1176,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:07.371Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 50,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:08.563Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:08.625Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 106,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:08.655Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 534,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:08.780Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:53:07.370Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:07.295Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
                "line": 9
              }
            },
            {
              "name": "Dado que Andrea recibió una conversación con una palabra única en el mensaje",
              "outcome": "SUCCESS",
              "duration": 468,
              "children": [
                {
                  "name": "Andrea anota la palabra reembolso1794783189356",
                  "outcome": "SUCCESS",
                  "duration": 2,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:09.362Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 91,
                    "column": 17
                  }
                },
                {
                  "name": "Andrea recibe una conversación con el mensaje \"Quiero un reembolso1794783189356 de mi compra\"",
                  "outcome": "SUCCESS",
                  "duration": 428,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:09.376Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 92,
                    "column": 23
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:09.353Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
                "line": 13
              }
            },
            {
              "name": "Cuando ella busca esa palabra",
              "outcome": "SUCCESS",
              "duration": 922,
              "children": [
                {
                  "name": "Andrea busca \"reembolso1794783189356\"",
                  "outcome": "SUCCESS",
                  "duration": 872,
                  "children": [
                    {
                      "name": "Andrea abre la página /search",
                      "outcome": "SUCCESS",
                      "duration": 500,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:09.859Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                        "line": 35,
                        "column": 31
                      }
                    },
                    {
                      "name": "Andrea enters \"reembolso1794783189356\" into el buscador global",
                      "outcome": "SUCCESS",
                      "duration": 283,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:10.382Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 37,
                        "column": 26
                      }
                    },
                    {
                      "name": "Andrea presses key Enter in el buscador global",
                      "outcome": "SUCCESS",
                      "duration": 40,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:10.676Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 38,
                        "column": 28
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:53:09.858Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 97,
                    "column": 35
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:09.822Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
                "line": 14
              }
            },
            {
              "name": "Entonces ella ve el aviso \"Messages (1)\"",
              "outcome": "SUCCESS",
              "duration": 707,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Messages (1)\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 673,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:10.759Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:10.746Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
                "line": 15
              }
            },
            {
              "name": "Y ella ve el aviso \"Cliente Búsqueda wrote:\"",
              "outcome": "SUCCESS",
              "duration": 61,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"Cliente Búsqueda wrote:\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:11.458Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:11.454Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
                "line": 16
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como agente de soporte\nQuiero buscar mensajes, contactos y conversaciones\nPara encontrar rápido el historial de un cliente</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature:12"
    },
    {
      "name": "[CP-05-03] Un término inexistente no devuelve resultados",
      "category": "[Luisa Espinal] RF-05 Búsqueda global",
      "outcome": "SUCCESS",
      "duration": 3651,
      "startedAt": "2026-11-15T22:53:11.597Z",
      "source": {
        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
        "line": 19
      },
      "tags": [
        {
          "type": "capability",
          "name": "Luisa"
        },
        {
          "type": "feature",
          "name": "[Luisa Espinal] RF-05 Búsqueda global"
        },
        {
          "type": "tag",
          "name": "luisaespinal"
        },
        {
          "type": "tag",
          "name": "rf05"
        },
        {
          "type": "tag",
          "name": "cp-05-03"
        }
      ],
      "activities": [
        {
          "name": "Dado que Andrea inició sesión en Chatwoot",
          "outcome": "SUCCESS",
          "duration": 1871,
          "children": [
            {
              "name": "Andrea inicia sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1822,
              "children": [
                {
                  "name": "Andrea navigates to \"/app/login\"",
                  "outcome": "SUCCESS",
                  "duration": 1063,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:11.627Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                },
                {
                  "name": "Andrea enters su correo into el campo de correo",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:12.707Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 17,
                    "column": 34
                  }
                },
                {
                  "name": "Andrea enters su contraseña into el campo de contraseña",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:12.760Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 18,
                    "column": 37
                  }
                },
                {
                  "name": "Andrea clicks on el botón de iniciar sesión",
                  "outcome": "SUCCESS",
                  "duration": 110,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:12.790Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                    "line": 19,
                    "column": 13
                  }
                },
                {
                  "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                  "outcome": "SUCCESS",
                  "duration": 522,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:12.914Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:11.626Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 13,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:11.600Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
            "line": 9
          }
        },
        {
          "name": "Cuando ella busca \"termino-que-no-existe-xyz\"",
          "outcome": "SUCCESS",
          "duration": 1011,
          "children": [
            {
              "name": "Andrea busca \"termino-que-no-existe-xyz\"",
              "outcome": "SUCCESS",
              "duration": 953,
              "children": [
                {
                  "name": "Andrea abre la página /search",
                  "outcome": "SUCCESS",
                  "duration": 455,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:13.516Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                    "line": 35,
                    "column": 31
                  }
                },
                {
                  "name": "Andrea enters \"termino-que-no-existe-xyz\" into el buscador global",
                  "outcome": "SUCCESS",
                  "duration": 354,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:13.987Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 37,
                    "column": 26
                  }
                },
                {
                  "name": "Andrea presses key Enter in el buscador global",
                  "outcome": "SUCCESS",
                  "duration": 95,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:14.359Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                    "line": 38,
                    "column": 28
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:13.515Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                "line": 101,
                "column": 35
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:13.473Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
            "line": 20
          }
        },
        {
          "name": "Entonces ella ve el aviso \"No results found for query 'termino-que-no-existe-xyz'\"",
          "outcome": "SUCCESS",
          "duration": 684,
          "children": [
            {
              "name": "Andrea ensures that si la pantalla muestra \"No results found for query 'termino-que-no-existe-xyz'\" does eventually equal true",
              "outcome": "SUCCESS",
              "duration": 658,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-15T22:53:14.488Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                "line": 25,
                "column": 33
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-15T22:53:14.485Z",
          "location": {
            "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
            "line": 21
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2026-11-15T22-53-15.632Z",
          "timestamp": "2026-11-15T22:49:12.940Z",
          "duration": 3651,
          "activities": [
            {
              "name": "Dado que Andrea inició sesión en Chatwoot",
              "outcome": "SUCCESS",
              "duration": 1871,
              "children": [
                {
                  "name": "Andrea inicia sesión en Chatwoot",
                  "outcome": "SUCCESS",
                  "duration": 1822,
                  "children": [
                    {
                      "name": "Andrea navigates to \"/app/login\"",
                      "outcome": "SUCCESS",
                      "duration": 1063,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:11.627Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    },
                    {
                      "name": "Andrea enters su correo into el campo de correo",
                      "outcome": "SUCCESS",
                      "duration": 42,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:12.707Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 17,
                        "column": 34
                      }
                    },
                    {
                      "name": "Andrea enters su contraseña into el campo de contraseña",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:12.760Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 18,
                        "column": 37
                      }
                    },
                    {
                      "name": "Andrea clicks on el botón de iniciar sesión",
                      "outcome": "SUCCESS",
                      "duration": 110,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:12.790Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Session.ts",
                        "line": 19,
                        "column": 13
                      }
                    },
                    {
                      "name": "Andrea waits until <<current page>>.url().href does include \"/app/accounts/\"",
                      "outcome": "SUCCESS",
                      "duration": 522,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:12.914Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                        "line": 13,
                        "column": 33
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:53:11.626Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 13,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:11.600Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
                "line": 9
              }
            },
            {
              "name": "Cuando ella busca \"termino-que-no-existe-xyz\"",
              "outcome": "SUCCESS",
              "duration": 1011,
              "children": [
                {
                  "name": "Andrea busca \"termino-que-no-existe-xyz\"",
                  "outcome": "SUCCESS",
                  "duration": 953,
                  "children": [
                    {
                      "name": "Andrea abre la página /search",
                      "outcome": "SUCCESS",
                      "duration": 455,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:13.516Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/interactions/index.ts",
                        "line": 35,
                        "column": 31
                      }
                    },
                    {
                      "name": "Andrea enters \"termino-que-no-existe-xyz\" into el buscador global",
                      "outcome": "SUCCESS",
                      "duration": 354,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:13.987Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 37,
                        "column": 26
                      }
                    },
                    {
                      "name": "Andrea presses key Enter in el buscador global",
                      "outcome": "SUCCESS",
                      "duration": 95,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-15T22:53:14.359Z",
                      "location": {
                        "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/src/tasks/Settings.ts",
                        "line": 38,
                        "column": 28
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-15T22:53:13.515Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/luisa.steps.ts",
                    "line": 101,
                    "column": 35
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:13.473Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
                "line": 20
              }
            },
            {
              "name": "Entonces ella ve el aviso \"No results found for query 'termino-que-no-existe-xyz'\"",
              "outcome": "SUCCESS",
              "duration": 684,
              "children": [
                {
                  "name": "Andrea ensures that si la pantalla muestra \"No results found for query 'termino-que-no-existe-xyz'\" does eventually equal true",
                  "outcome": "SUCCESS",
                  "duration": 658,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-15T22:53:14.488Z",
                  "location": {
                    "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/step-definitions/comunes.steps.ts",
                    "line": 25,
                    "column": 33
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-15T22:53:14.485Z",
              "location": {
                "path": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature",
                "line": 21
              }
            }
          ]
        }
      ],
      "narrative": "<p>Como agente de soporte\nQuiero buscar mensajes, contactos y conversaciones\nPara encontrar rápido el historial de un cliente</p>\n",
      "cast": [
        {
          "name": "Andrea",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":30000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://localhost:3000\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"api_access_token\":\"muJtjnGCewy6wjDAiGraSXE6\"},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "C:/Users/Luisa/Documents/Proyectos Uni/Proyecto Final de Validación/chatwoot/qa/screenplay/features/luisa/rf05_busqueda.feature:19"
    }
  ],
  "history": [
    {
      "timestamp": "2026-11-15T22:49:12.940Z",
      "duration": 242308,
      "outcomes": {
        "passed": 30,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2026-11-15T22-53-15.632Z",
      "slowest": 108176,
      "fastest": 120,
      "average": 8072,
      "commit": "6117c81b8",
      "branch": "proyecto-final",
      "repositoryUrl": "https://github.com/LuisafdaEM18/chatwoot.git",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "capability",
      "name": "Daniel",
      "scenarioCount": 10,
      "passed": 10,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Daniel Ortiz] RF-06 Gestión de contactos",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "danielortiz",
      "scenarioCount": 10,
      "passed": 10,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf06",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-06-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-06-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Daniel Ortiz] RF-07 Importación de contactos desde CSV",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf07",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-07-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-07-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Daniel Ortiz] RF-08 Notas de contacto",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf08",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-08-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-08-02",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Daniel Ortiz] RF-09 Atributos personalizados",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf09",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-09-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-09-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "d-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Daniel Ortiz] RF-10 Filtros avanzados y segmentos",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf10",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-10-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-10-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "capability",
      "name": "Juanpablo",
      "scenarioCount": 10,
      "passed": 10,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Juan Pablo Berrío] RF-11 Respuestas predefinidas",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "juanpabloberrio",
      "scenarioCount": 10,
      "passed": 10,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf11",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-11-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-11-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Juan Pablo Berrío] RF-12 Macros",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf12",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-12-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-12-02",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Juan Pablo Berrío] RF-13 Reglas de automatización",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf13",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-13-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-13-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Juan Pablo Berrío] RF-14 Equipos y miembros",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf14",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-14-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-14-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Juan Pablo Berrío] RF-15 Reportes de conversaciones y agentes",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf15",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-15-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-15-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "capability",
      "name": "Luisa",
      "scenarioCount": 10,
      "passed": 10,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Luisa Espinal] RF-01 Cambio de estado de una conversación",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "luisaespinal",
      "scenarioCount": 10,
      "passed": 10,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf01",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-01-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-01-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "d-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Luisa Espinal] RF-02 Asignación de una conversación",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf02",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-02-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-02-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "d-02",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Luisa Espinal] RF-03 Envío de mensajes y notas privadas",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf03",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-03-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-03-02",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Luisa Espinal] RF-04 Gestión de etiquetas",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf04",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-04-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-04-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "[Luisa Espinal] RF-05 Búsqueda global",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "rf05",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-05-01",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "tag",
      "name": "cp-05-03",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v22.14.0",
    "os": {
      "name": "win32",
      "version": "10.0.26200",
      "arch": "x64"
    },
    "serenityVersion": "3.48.0",
    "testRunner": {
      "name": "Cucumber",
      "version": "13.3.0"
    },
    "browsers": [],
    "ci": {
      "provider": "localhost (DESKTOP-6LK625U)",
      "buildNumber": "2026-11-15 22:53",
      "branch": "proyecto-final",
      "commit": "6117c81b8",
      "commitMessage": "add Jenkinsfile y configuración de SonarQube",
      "commitAuthor": "berrip",
      "repositoryUrl": "https://github.com/LuisafdaEM18/chatwoot.git"
    },
    "projectName": "chatwoot-e2e-screenplay",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "features",
    "outcomes": {
      "passed": 30,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 30,
    "children": [
      {
        "type": "directory",
        "name": "daniel",
        "outcomes": {
          "passed": 10,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 10,
        "children": [
          {
            "type": "file",
            "name": "rf06_contactos",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-06-01] Crear un contacto con correo y teléfono válidos",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-06-03] Un correo repetido, aunque cambien las mayúsculas, no se acepta",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como administradora de la cuenta\nQuiero registrar los datos de los clientes\nPara tener su información de contacto a la mano",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf07_importacion_csv",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-07-01] Importar un CSV con tres contactos válidos",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-07-03] Una importación sin archivo se rechaza",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como administradora de la cuenta\nQuiero importar contactos desde un archivo CSV\nPara no registrarlos uno por uno",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf08_notas_contacto",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-08-01] Agregar una nota al contacto",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-08-02] Eliminar una nota existente",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como agente de soporte\nQuiero dejar notas en la ficha de un contacto\nPara recordar detalles importantes del cliente",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf09_atributos",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-09-01] Crear un atributo de contacto de tipo número",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-09-03] Un tipo de atributo que no existe se rechaza",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como administradora de la cuenta\nQuiero agregar campos propios a los contactos\nPara guardar datos que Chatwoot no trae por defecto",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf10_filtros_segmentos",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-10-01] Filtrar los contactos por nombre",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-10-03] Un filtro con un operador inválido se rechaza",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como administradora de la cuenta\nQuiero filtrar los contactos por sus datos\nPara encontrar grupos de clientes",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      },
      {
        "type": "directory",
        "name": "juanpablo",
        "outcomes": {
          "passed": 10,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 10,
        "children": [
          {
            "type": "file",
            "name": "rf11_respuestas_predefinidas",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-11-01] Crear una respuesta predefinida e insertarla en el chat",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-11-03] Un código corto repetido se rechaza",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como agente de soporte\nQuiero guardar respuestas frecuentes con un código corto\nPara responder más rápido",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf12_macros",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-12-01] Ejecutar una macro que etiqueta, asigna un equipo y resuelve",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-12-02] Una macro personal no la ve otro agente; la global sí",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como agente de soporte\nQuiero ejecutar varias acciones con un solo clic\nPara cerrar los casos repetitivos sin pasos manuales",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf13_automatizacion",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-13-01] La regla etiqueta la conversación cuando llega un mensaje con \"factura\"",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-13-03] El retraso de ejecución solo acepta de 10 a 43 200 minutos",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como administradora de la cuenta\nQuiero reglas que actúen solas cuando llega un mensaje\nPara clasificar los casos sin intervención manual",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf14_equipos",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-14-01] Crear un equipo y agregarle dos agentes",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-14-03] Un agente sin rol de administrador no puede crear equipos",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como administradora de la cuenta\nQuiero organizar a los agentes en equipos\nPara repartir el trabajo por área",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf15_reportes",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-15-01] Ver las métricas de conversaciones de los últimos 7 días",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-15-03] Un agente sin permisos no puede consultar los reportes",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como administradora de la cuenta\nQuiero ver las métricas de atención\nPara medir el desempeño del equipo",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      },
      {
        "type": "directory",
        "name": "luisa",
        "outcomes": {
          "passed": 10,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 10,
        "children": [
          {
            "type": "file",
            "name": "rf01_cambio_estado",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-01-01] Resolver una conversación abierta",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-01-03] Un estado que no existe se rechaza y la conversación sigue abierta",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como administradora de la cuenta\nQuiero cambiar el estado de las conversaciones\nPara saber cuáles siguen pendientes de atención",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf02_asignacion",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-02-01] Asignar la conversación a un agente de la bandeja",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-02-03] Un agente de otra cuenta se rechaza y se conserva el asignado",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como administradora de la cuenta\nQuiero asignar cada conversación a un agente\nPara que haya un responsable de responderla",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf03_mensajes_notas",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-03-01] Enviar una respuesta pública al cliente",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-03-02] Agregar una nota privada que solo ven los agentes",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como agente de soporte\nQuiero responder al cliente y dejar notas internas\nPara atenderlo y coordinarme con mi equipo",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf04_etiquetas",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-04-01] Crear una etiqueta y aplicarla a una conversación",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-04-03] Una etiqueta con símbolos se rechaza",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como administradora de la cuenta\nQuiero crear etiquetas y aplicarlas a las conversaciones\nPara clasificar los casos por tema",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          },
          {
            "type": "file",
            "name": "rf05_busqueda",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "[CP-05-01] Encontrar una conversación por el texto de un mensaje",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "[CP-05-03] Un término inexistente no devuelve resultados",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "Como agente de soporte\nQuiero buscar mensajes, contactos y conversaciones\nPara encontrar rápido el historial de un cliente",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "features"
};
