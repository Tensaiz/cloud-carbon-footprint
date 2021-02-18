/*
 * © 2020 ThoughtWorks, Inc. All rights reserved.
 */

import { initialTotals } from '@view/EmissionsTableUtils'

describe('emissions table utils', () => {
  it('generate initial totals from list of service objects', () => {
    const expectedInitials = {
      ebs: {
        wattHours: 0,
        co2e: 0,
        cost: 0,
      },
      s3: {
        wattHours: 0,
        co2e: 0,
        cost: 0,
      },
      ec2: {
        wattHours: 0,
        co2e: 0,
        cost: 0,
      },
      elasticache: {
        wattHours: 0,
        co2e: 0,
        cost: 0,
      },
      rds: {
        wattHours: 0,
        co2e: 0,
        cost: 0,
      },
      lambda: {
        wattHours: 0,
        co2e: 0,
        cost: 0,
      },
      computeEngine: {
        wattHours: 0,
        co2e: 0,
        cost: 0,
      },
      total: {
        wattHours: 0,
        co2e: 0,
        cost: 0,
      },
    }

    const serviceNames = Object.keys(expectedInitials).filter((total) => total !== 'total')
    expect(initialTotals(serviceNames)).toEqual(expectedInitials)
  })
})
