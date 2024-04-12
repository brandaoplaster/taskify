# frozen_string_literal: true
class Task < ApplicationRecord
  validates :title, :description, presence: true
end
