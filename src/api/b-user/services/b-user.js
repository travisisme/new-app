'use strict';

/**
 * b-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::b-user.b-user');
