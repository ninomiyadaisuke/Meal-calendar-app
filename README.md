# Meal-calendar-app

### DB設計

USER  

|Collection|Type|option|
|------|----|------|
|name|String|require:true|
|email|String|require:true|
|role|String|require:true|
|userList|Array|default:[]|


MEAL

|Collection|Type|option|
|------|----|------|
|menu|Array|default:[]|
|userCount|Number|require: true|
|shopping|Array|default: []|
|day|Date|require: true|

